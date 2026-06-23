#!/usr/bin/env python3
"""
index.py — regenerates the tool grid in index.html

Scans the tools/ directory for any folder containing an index.html.
Reads metadata from a meta.json in each tool folder (if present),
otherwise falls back to sensible defaults derived from the folder name.
Rewrites the <!-- TOOL-GRID-START --> ... <!-- TOOL-GRID-END --> block
in index.html in-place.

meta.json schema (all fields optional):
  {
    "name":    "sql.js",
    "desc":    "SQLite compiled to WASM...",
    "tag":     "database",
    "href":    "tools/sql-js/"   // defaults to tools/<folder>/
  }

Usage:
  python3 index.py              # dry-run preview
  python3 index.py --write      # write changes to index.html
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT   = Path(__file__).parent
TOOLS_DIR   = REPO_ROOT / "tools"
INDEX_HTML  = REPO_ROOT / "index.html"
GRID_START  = "<!-- TOOL-GRID-START -->"
GRID_END    = "<!-- TOOL-GRID-END -->"

FALLBACK_TAGS = {
    "sql":         "database",
    "sqlite":      "database",
    "pyodide":     "language runtime",
    "python":      "language runtime",
    "quickjs":     "language runtime",
    "js":          "language runtime",
    "photon":      "image processing",
    "image":       "image processing",
    "ffmpeg":      "video",
    "video":       "video",
    "voy":         "search",
    "search":      "search",
    "perspective": "data viz",
    "data":        "data viz",
    "lottie":      "animation",
    "dotlottie":   "animation",
}


def folder_to_name(folder: str) -> str:
    """Convert a folder slug to a display name."""
    overrides = {
        "sql-js":      "sql.js",
        "dotlottie":   "dotLottie",
        "ffmpeg":      "FFmpeg.wasm",
        "quickjs":     "QuickJS",
    }
    return overrides.get(folder, folder.replace("-", " ").title())


def folder_to_tag(folder: str) -> str:
    for key, tag in FALLBACK_TAGS.items():
        if key in folder.lower():
            return tag
    return "wasm"


def folder_to_desc(name: str) -> str:
    return f"{name} — WebAssembly demo."


def load_tool(folder: Path) -> dict | None:
    if not (folder / "index.html").exists():
        return None
    meta_path = folder / "meta.json"
    if meta_path.exists():
        try:
            meta = json.loads(meta_path.read_text())
        except json.JSONDecodeError as e:
            print(f"  warning: bad meta.json in {folder.name}: {e}", file=sys.stderr)
            meta = {}
    else:
        meta = {}
    name = meta.get("name") or folder_to_name(folder.name)
    return {
        "name": name,
        "desc": meta.get("desc") or folder_to_desc(name),
        "tag":  meta.get("tag")  or folder_to_tag(folder.name),
        "href": meta.get("href") or f"tools/{folder.name}/",
    }


def render_card(tool: dict) -> str:
    return (
        f'      <a class="tool-card" href="{tool["href"]}">\n'
        f'        <span class="card-name">{tool["name"]}</span>\n'
        f'        <span class="card-desc">{tool["desc"]}</span>\n'
        f'        <span class="card-tag">{tool["tag"]}</span>\n'
        f'      </a>'
    )


def render_grid(tools: list[dict]) -> str:
    cards = "\n".join(render_card(t) for t in tools)
    return (
        f"{GRID_START}\n"
        f'    <div class="tool-grid">\n'
        f'{cards}\n'
        f'    </div>\n'
        f'    {GRID_END}'
    )


def main():
    parser = argparse.ArgumentParser(description="Regenerate index.html tool grid.")
    parser.add_argument("--write", action="store_true", help="Write changes (default: dry run)")
    args = parser.parse_args()

    if not TOOLS_DIR.exists():
        print("ERROR: tools/ directory not found.", file=sys.stderr)
        sys.exit(1)

    if not INDEX_HTML.exists():
        print("ERROR: index.html not found.", file=sys.stderr)
        sys.exit(1)

    # discover tools in alphabetical order (stable, predictable output)
    folders = sorted(p for p in TOOLS_DIR.iterdir() if p.is_dir())
    tools = [t for f in folders if (t := load_tool(f)) is not None]

    if not tools:
        print("No tool folders with index.html found — nothing to do.")
        sys.exit(0)

    print(f"Found {len(tools)} tool(s):")
    for t in tools:
        print(f"  {t['href']:35s} {t['name']}")

    html = INDEX_HTML.read_text(encoding="utf-8")

    if GRID_START not in html or GRID_END not in html:
        print(
            f"\nERROR: markers not found in index.html.\n"
            f"Add these around your tool grid:\n"
            f"  {GRID_START}\n"
            f"  {GRID_END}",
            file=sys.stderr,
        )
        sys.exit(1)

    new_grid = render_grid(tools)
    new_html = re.sub(
        re.escape(GRID_START) + r".*?" + re.escape(GRID_END),
        new_grid,
        html,
        flags=re.DOTALL,
    )

    if new_html == html:
        print("\nindex.html is already up to date.")
        sys.exit(0)

    if args.write:
        INDEX_HTML.write_text(new_html, encoding="utf-8")
        print(f"\n✓ index.html updated with {len(tools)} tool(s).")
    else:
        print("\n--- dry run: would write this grid ---")
        print(new_grid)
        print("--------------------------------------")
        print("Run with --write to apply changes.")


if __name__ == "__main__":
    main()
