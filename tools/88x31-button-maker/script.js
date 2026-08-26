  const output = document.getElementById("output");
  const text = document.getElementById("text");

  const input = document.getElementById("input");
  const retroButton = document.getElementById("retroButton");
  const bgColor = document.getElementById("bg-color");
  const textColor = document.getElementById("text-color");
  const borderColor = document.getElementById("border-color");
  const borderWidth = document.getElementById("border-width");
  const upload = document.getElementById("upload");
  const intoImage = document.getElementById("into-image");

  function updatePreview() {
    text.innerText = input.value;
    output.style.backgroundColor = bgColor.value;
    output.style.color = textColor.value;
    output.style.border = `${borderWidth.value}px solid ${borderColor.value}`;

    const align = document.querySelector('input[name="align"]:checked')?.value;
    text.style.textAlign = align;

    if (retroButton.checked) {
      output.style.borderStyle = "inset";
      output.style.borderBottom = "2px solid black";
      output.style.borderRight = "2px solid black";
      output.style.borderTop = "2px solid white";
      output.style.borderLeft = "2px solid white";
      output.style.backgroundColor = "#9a9c9d";
    } else {
      output.style.borderStyle = "solid";
    }
  }

  function handleUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = function () {
      output.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(file);
  }

  // Event bindings
  input.addEventListener("input", updatePreview);
  retroButton.addEventListener("change", updatePreview);
  bgColor.addEventListener("input", updatePreview);
  textColor.addEventListener("input", updatePreview);
  borderColor.addEventListener("input", updatePreview);
  borderWidth.addEventListener("input", updatePreview);
  upload.addEventListener("change", handleUpload);

  document.querySelectorAll('input[name="align"]').forEach((el) =>
    el.addEventListener("change", updatePreview)
  );

  // Preview runs at load
  updatePreview();

  // Export to image
  intoImage.addEventListener("click", () => {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    domtoimage
      .toPng(output, { width: 88, height: 31 })
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        resultsDiv.appendChild(img);
      })
      .catch((error) => console.error("Image generation error:", error));
  });