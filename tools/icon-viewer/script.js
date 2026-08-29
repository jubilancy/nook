// Icon/asset name lists per pack. These are labels shown on cards;
// the actual glyph is fetched live as a plain SVG file from
// https://api.iconify.design/{prefix}/{name}.svg — no JS framework needed
// to use the copied output, just an <img> tag or direct file download.
//
// These lists are large curated selections, not literal 1:1 mirrors of each
// pack's full catalog (some packs run into the thousands of icons and
// aren't fetchable as a live list from this environment).
const assetDatabase = {
    "fc": ["about", "acapella", "advertising", "affiliate-marketing", "airplane-mode-on", "alarm-clock", "answers", "approval", "assistant", "automotive", "bad-decision", "bear", "biohazard", "biotech", "bookmark", "brightness", "broken-link", "browser-upload", "bug", "bullish", "business-contact", "business-user", "businessman", "businesswoman", "cable-release", "calculator", "calendar", "camera-identification", "candle-sticks", "car", "cardiogram", "checked-radio-button", "checkmark", "cloud-storage", "collaboration", "collect", "combo-chart", "command-line", "comments", "compact-camera", "conference-call", "contacts", "currency-exchange", "customer-support", "cut", "data-configuration", "database", "decision", "diploma-1", "diploma-2", "disclaimer", "document", "dollar", "donate", "double-tick", "edit-image", "empty-battery", "endowment-insurance", "engineering", "envelope", "expired", "export", "external", "eye-scan", "faq", "fax", "feedback", "file", "film-reel", "filing-cabinet", "flash-off", "flash-on", "flash-photography", "flow-chart", "folder", "full-battery", "genealogy", "genius", "gallery", "globe", "google-logo", "graduation-cap", "grid", "hand", "heart-with-pulse", "high-priority", "home", "hourglass", "idea", "image-file", "in-transit", "info", "inspection", "invite", "isometric", "key", "landscape", "leave", "like-placeholder", "line-chart", "link", "list", "lock", "low-battery", "manager", "mind-map", "money-transfer", "multiple-inputs", "multiple-cameras", "music", "negative-dynamic", "news", "next", "no-idea", "not-listed-location", "olympics", "onboarding", "online-support", "opened-folder", "organization", "overtime", "package", "paid", "pie-chart", "planner", "plus", "podium-with-audience", "positive-dynamic", "print", "privacy", "process", "puzzle", "questions", "rating", "reading-ebook", "reddit", "refresh", "rent", "reuse", "rules", "sales-performance", "search", "selfie", "services", "settings", "shipped", "shop", "signature", "sms", "sound", "sports-mode", "sports-car", "stack-of-photos", "stopwatch", "survey", "synchronize", "tabs", "tag", "template", "test-passed", "todo-list", "top-earners", "unlock", "up-left", "upload", "url", "video-call", "video-projector", "voice-presentation", "voicemail", "wireless-charging", "workflow"],
    "vivid": ["activity", "alert", "archive", "atm", "bag", "balloon", "bank", "battery", "beach", "bell", "bicycle", "birthday-cake", "bone", "book", "briefcase", "brush", "building", "bus", "cake", "calendar", "camera", "candy", "car", "cart", "cat", "chart", "chat", "chef-hat", "cherry", "chocolate", "christmas-tree", "clock", "cloud", "coffee", "confetti", "cookie", "crown", "cupcake", "diamond", "dog", "donut", "dumbbell", "earth", "egg", "envelope", "eyeglasses", "fan", "feather", "film", "fire", "fish", "flag", "flower", "folder", "football", "fork-knife", "gamepad", "gem", "ghost", "gift", "glasses", "globe", "graduation-cap", "guitar", "hammer", "hat", "headphone", "heart", "home", "hospital", "hot-air-balloon", "hourglass", "house", "ice-cream", "image", "kite", "leaf", "lemon", "lightbulb", "location", "lock", "magnet", "mail", "map", "medal", "microphone", "moon", "mountain", "mug", "music-note", "notebook", "paintbrush", "palette", "party-popper", "pencil", "phone", "piano", "pizza", "plane", "plant", "present", "puzzle", "rainbow", "recipe", "rocket", "sailboat", "sandwich", "scissors", "shopping-bag", "snowflake", "soccer-ball", "star", "suitcase", "sun", "sunglasses", "sushi", "target", "telescope", "tent", "thermometer", "ticket", "trophy", "truck", "umbrella", "unicorn", "van", "video-camera", "wallet", "watch", "watering-can", "wine-glass", "wrench"],
    "logos": ["framer", "figma", "vitejs", "vercel", "nextjs-icon", "tailwindcss-icon", "html-5", "css-3", "javascript", "typescript-icon", "react", "vue", "angular-icon", "nodejs-icon", "python", "github-icon", "visual-studio-code", "slack-icon", "discord-icon", "unreal-engine", "svelte-icon", "astro-icon", "webflow", "graphql", "docker-icon", "kubernetes", "aws", "google-cloud", "azure-icon", "firebase", "supabase-icon", "mongodb-icon", "postgresql", "redis", "prisma", "storybook", "jest", "cypress-icon-testing", "webpack", "rollupjs", "vite", "eslint", "prettier", "npm-icon", "yarn", "pnpm", "deno", "bun", "flutter", "swift", "kotlin-icon", "rust", "go", "java", "csharp", "ruby", "php", "rails", "django-icon", "laravel", "spring-icon", "wordpress-icon", "shopify", "stripe", "paypal", "notion-icon", "linear-icon", "figma-icon", "canva-icon"],
    "pixelarticons": ["arcade", "avatar", "battery-charging", "bed", "briefcase", "camera", "card", "cat", "coin", "controller", "device-laptop", "dice", "drink", "flying-saucer", "gamepad", "heart", "matrix", "mood-happy", "pixel", "trophy", "alien", "android", "book-open", "bug", "bulb", "bus", "calendar", "checkbox-on", "chevron-down", "cloud", "cog", "compass", "credit-card", "download", "email", "eye", "flag", "flask", "folder", "gift", "globe", "home", "image", "keyboard", "layers", "lightning", "lock", "mail", "map", "microphone", "monitor", "moon", "mouse", "music", "notes", "pin", "plane", "plug", "power", "printer", "reload", "rocket", "save", "scale", "script-text", "search", "server", "settings", "share", "shield", "shopping-bag", "sliders", "smartphone", "speaker", "star", "sun", "swap", "tag", "thumb-up", "trash", "tree", "truck", "umbrella", "unlock", "upload", "user", "video", "visible", "wallet", "watch", "wifi", "zoom-in"],
    "noto-v1": ["grinning-face", "winking-face", "rocket", "fire", "sparkles", "party-popper", "clown-face", "alien", "ghost", "robot", "unicorn", "avocado", "taco", "pizza", "bubbling-beaker", "crystal-ball", "rainbow", "artist-palette", "video-game", "test-tube", "cherry-blossom", "sunflower", "tulip", "rose", "cactus", "palm-tree", "evergreen-tree", "four-leaf-clover", "maple-leaf", "mushroom", "chestnut", "seedling", "sheaf-of-rice", "ear-of-corn", "hot-pepper", "cucumber", "carrot", "potato", "sweet-potato", "roasted-sweet-potato", "peanuts", "chestnut2", "bread", "croissant", "baguette-bread", "pretzel", "bagel", "pancakes", "waffle", "cheese-wedge", "meat-on-bone", "poultry-leg", "cut-of-meat", "bacon", "hamburger", "french-fries", "pizza2", "hot-dog", "sandwich", "taco2", "burrito", "stuffed-flatbread", "falafel", "egg", "cooking", "shallow-pan-of-food", "pot-of-food", "fondue", "bowl-with-spoon", "green-salad", "popcorn", "butter", "salt", "canned-food", "bento-box", "rice-cracker", "rice-ball", "cooked-rice", "curry-rice", "steaming-bowl", "spaghetti", "roasted-sweet-potato2", "oden", "sushi", "fried-shrimp", "fish-cake-with-swirl", "moon-cake", "dango", "dumpling", "fortune-cookie", "takeout-box", "crab", "lobster", "shrimp", "squid", "oyster", "soft-ice-cream", "shaved-ice", "ice-cream", "doughnut", "cookie", "birthday-cake", "shortcake", "cupcake", "pie", "chocolate-bar", "candy", "lollipop", "custard", "honey-pot", "baby-bottle", "milk-glass", "hot-beverage", "teapot", "teacup-without-handle", "sake", "bottle-with-popping-cork", "wine-glass", "cocktail-glass", "tropical-drink", "beer-mug", "clinking-beer-mugs", "clinking-glasses", "tumbler-glass"],
    "twemoji": ["grinning-face-with-big-eyes", "smiling-face-with-heart-eyes", "zany-face", "exploding-head", "nail-polish", "flexed-biceps", "brain", "eyes", "unicorn", "panda", "t-rex", "sushi", "beer-mug", "flying-saucer", "milky-way", "fireworks", "wrapped-gift", "slot-machine", "crystal-ball", "nazar-amulet", "cat-face", "dog-face", "fox", "rabbit-face", "bear", "koala", "tiger-face", "lion", "cow-face", "pig-face", "frog-face", "monkey-face", "chicken", "penguin", "bird", "baby-chick", "duck", "eagle", "owl", "bat", "wolf", "boar", "horse-face", "unicorn-face", "bee", "bug", "butterfly", "snail", "lady-beetle", "ant", "cricket", "spider", "scorpion", "turtle", "snake", "lizard", "sauropod", "t-rex2", "octopus", "shell", "coral", "fish", "tropical-fish", "blowfish", "shark", "dolphin", "whale", "crocodile", "leopard", "zebra", "gorilla", "elephant", "hippopotamus", "rhinoceros", "camel", "giraffe", "kangaroo", "llama", "hedgehog", "raccoon", "skunk", "badger", "paw-prints", "dragon", "dragon-face", "cactus", "christmas-tree", "evergreen-tree", "deciduous-tree", "palm-tree", "seedling", "herb", "shamrock", "four-leaf-clover", "maple-leaf", "fallen-leaf", "leaf-fluttering-in-wind", "rosette", "bouquet", "cherry-blossom", "white-flower", "lotus", "rose", "wilted-flower", "hibiscus", "sunflower", "blossom", "tulip"],
    "openmoji": ["face-with-monocle", "shushing-face", "cowboy-hat-face", "ninja", "yeti", "mage", "mammoth", "dodo", "sloth", "bubble-tea", "falafel", "ringed-planet", "aurora", "magic-wand", "flying-disc", "accordion", "boomerang", "pinata", "headstone", "mirror-ball", "beaver", "otter", "flamingo", "peacock", "parrot", "swan", "seal", "black-cat", "polar-bear", "sloth2", "genie", "vampire", "zombie", "elf", "fairy", "troll", "goblin", "merperson", "superhero", "supervillain", "detective", "guard", "construction-worker", "cook", "farmer", "singer", "artist", "pilot", "astronaut", "firefighter", "people-hugging", "elephant2", "gorilla2", "orangutan", "bison", "ox", "water-buffalo", "cow2", "pig2", "ram", "sheep2", "goat", "camel2", "llama2", "giraffe2", "kangaroo2", "badger2", "turkey", "rooster", "dove", "eagle2", "swan2", "flamingo2", "owl2", "bat2", "seal2", "fish2", "blowfish2", "tropical-fish2", "shark2", "dolphin2", "whale2", "crocodile2", "turtle2", "lizard2", "snake2", "dragon-face2", "sauropod2", "spouting-whale", "octopus2"],
    "fxemoji": ["smilingfacewithheartshapedeyes", "facewithwrysmile", "ghost", "alienmonster", "catface", "poodle", "octopus", "kiwifruit", "hotpepper", "shortcake", "rocket", "anchor", "barberpole", "videogame", "guitar", "partypopper", "balloon", "heartdecoration", "gemstone", "fire", "rainbow", "unicornface", "dragonface", "bat", "owl", "koala", "pandaface", "tigerface", "lionface", "cowface", "pigface", "frogface", "monkeyface", "chicken", "penguin", "bird", "babychick", "duck", "eagle", "wolfface", "boar", "horseface", "beetle", "ant", "cricket", "spider", "scorpion", "turtle", "snake", "lizard", "tropicalfish", "shark", "dolphin", "whale", "crocodile", "cherryblossom", "sunflower", "hibiscus", "rose", "tulip", "fourleafclover", "mapleleaf", "seedling", "herb", "cactus", "christmastree", "palmtree", "evergreentree", "mushroom", "shell", "coral", "iceskate", "snowman", "snowflake", "sun", "crescentmoon", "fullmoon", "star", "star2", "sparkles", "comet", "milkyway", "ringedplanet", "shootingstar", "cloudwithlightning", "umbrella", "droplet", "sweatdrops", "dashsymbol", "collision", "dizzy", "musicalnote", "musicalnotes", "microphone", "headphone", "radio", "saxophone", "guitar2", "musicalkeyboard", "trumpet", "violin", "drum"],
    "bxs": ["zap", "flame", "hot", "bomb", "happy-heart-eyes", "laugh", "wink", "skull", "ghost", "planet", "rocket", "invader", "game", "joystick", "party", "crown", "diamond", "trophy", "medal", "star", "sun", "moon", "cloud", "rain", "snowflake", "umbrella", "leaf", "flower", "tree", "cake", "gift", "heart", "bell", "bulb", "camera", "car", "coffee-alt", "cog", "compass", "envelope", "eye", "flag", "graduation", "grid", "home", "key", "lock", "magic-wand", "map", "message", "mobile", "music", "paint-roll", "palette", "paper-plane", "pin", "plane-alt", "plus-circle", "smile", "sad", "shield", "shopping-bag-alt", "spa", "speaker", "sticker", "toolbox", "truck", "user-circle", "wallet", "watch-alt", "wine", "wrench", "yin-yang"],
    "grommet": ["achievement", "action", "announce", "assist-listening", "atm", "basket", "bike", "cafeteria", "car", "cloning", "closed-caption", "cubes", "gamepad", "gift", "ice-cream", "magic", "map", "paint", "robot", "vulnerability", "apps", "attraction", "beacon", "bike2", "bloglines", "bone", "bootstrap", "bug", "calendar", "camera", "chat", "cloud", "cocktail", "coffee", "connect", "cube", "documentation", "dvd", "emoji", "favorite", "flag", "flower", "footprint", "forest", "fragile", "friendly", "globe", "group", "helix", "history", "home", "hospital", "image", "language", "layer", "leaf", "license", "lock", "moon", "money", "monitor", "music", "network", "note", "phone", "pin", "planet", "puzzle", "radial", "rocket", "run", "shop", "star", "sun", "target", "tree", "trophy", "umbrella", "vault", "video", "wine", "wind"],
    "fluent-emoji": ["alien", "beaming-face-with-smiling-eyes", "clown-face", "cowboy-hat-face", "fire", "ghost", "heart-with-arrow", "money-mouth-face", "nail-polish", "party-popper", "pile-of-poo", "robot", "rocket", "rolling-on-the-floor-laughing", "smiling-face-with-sunglasses", "alien-monster", "sparkles", "unicorn", "victory-hand", "zany-face", "beaver", "otter", "flamingo", "peacock", "parrot", "swan", "seal", "cat-face", "polar-bear", "vampire", "zombie", "elf", "fairy", "genie", "merperson", "superhero", "detective", "cook", "artist", "pilot", "astronaut", "gorilla", "elephant", "hippopotamus", "rhinoceros", "camel", "giraffe", "kangaroo", "llama", "hedgehog", "raccoon", "badger", "dragon", "cactus", "christmas-tree", "seedling", "herb", "four-leaf-clover", "maple-leaf", "bouquet", "cherry-blossom", "lotus", "rose", "hibiscus", "sunflower", "tulip", "snowman", "sun-with-face", "full-moon-with-face", "shooting-star", "rainbow", "cloud-with-lightning", "umbrella-with-rain-drops", "droplet", "musical-notes", "microphone", "headphone", "guitar", "trumpet", "violin", "drum", "soccer-ball", "basketball", "video-game", "bowling", "chess-pawn", "dart", "yo-yo", "kite", "teddy-bear", "sled", "curling-stone"],
    "emojione": ["grinning-face-with-smiling-eyes", "face-with-tears-of-joy", "smiling-face-with-heart-eyes", "thinking-face", "face-without-mouth", "spouting-whale", "unicorn-face", "sauropod", "taco", "popcorn", "revolving-hearts", "sparkles", "fire", "collision", "rocket", "alien", "video-game", "crystal-ball", "rainbow", "american-football", "cat-face", "dog-face", "fox", "rabbit-face", "bear", "koala", "tiger-face", "lion", "cow-face", "pig-face", "frog-face", "monkey-face", "chicken", "penguin", "bird", "baby-chick", "duck", "eagle", "owl", "bat", "wolf", "boar", "horse-face", "unicorn-face2", "bee", "bug2", "butterfly", "snail", "turtle", "snake", "lizard", "octopus", "shell", "fish", "tropical-fish", "shark", "dolphin", "whale2", "crocodile", "cactus", "christmas-tree", "evergreen-tree", "palm-tree", "seedling", "shamrock", "four-leaf-clover", "maple-leaf", "cherry-blossom", "rose", "sunflower", "tulip", "snowman", "sun-with-face", "crescent-moon", "star2", "shooting-star", "cloud-with-lightning", "umbrella-with-rain-drops", "musical-notes", "microphone2", "guitar", "drum"],
    "3dicons": ["copy", "cube", "cup", "document", "dollar", "envelope", "eye", "folder", "front-camera", "heart", "home", "key", "layers", "link", "lock", "mail", "message", "mic", "mobile", "moon", "book", "box", "calendar", "camera", "chart", "chat", "clock", "cloud", "coin", "compass", "gift", "globe", "graph", "headphones", "image", "laptop", "lightbulb", "map", "medal", "music", "notification", "palette", "paper-plane", "pen", "planet", "rocket", "search", "settings", "shield", "star", "sun", "target", "trophy", "umbrella", "wallet"],
    "blob": ["face-with-tears-of-joy", "star-struck", "cat-face", "sunglasses", "partying-face", "ninja", "fast-forward-button", "heart-suit", "zany-face", "melting-face", "popcorn", "saluting-face", "shark", "shrug", "thinking-face", "face-with-symbols-on-mouth", "waving-hand", "mage", "cowboy-hat-face", "yeti", "robot", "alien", "ghost", "unicorn", "dragon", "fox", "koala", "panda", "penguin", "owl", "bat"],
    "kaomoji": ["(o_O)", "(^_~)", "(¬‿¬)", "(T_T)", "(^O^)", "(★_★)", "(◡‿◡)", "¯\\(ツ)_/¯", "(╯°□°)╯︵ ┻━┻", "┬─┬ノ( º _ ºノ)", "ᕦ(ò_óˇ)ᕤ", "(=^･ω･^=)", "( ͡° ͜ʖ ͡°)", "༼ つ ◕_◕ ༽つ", "(づ｡◕‿‿◕｡)づ", "ヘ(^_^ヘ)", "(•_•)", "(ง'̀-'́)ง", "凸(¬‿¬)凸", "(≧◡≦)", "(＾▽＾)", "(╥﹏╥)", "(ノ°益°)ノ", "( ˘ ³˘)♥", "(*^▽^*)", "(¬_¬)", "ヽ(°〇°)ﾉ", "(っ˘ω˘ς )", "(⊃｡•́‿•̀｡)⊃", "(￣▽￣)", "٩(◕‿◕｡)۶"],
    "swe-stickers": ["docker", "kubernetes", "github", "gitlab", "npm", "yarn", "denojs", "bun", "webpack", "babel", "eslint", "prettier", "graphql", "apollo", "prisma", "supabase", "firebase", "netlify", "heroku", "linux", "vercel", "vim", "neovim", "vscode", "figma", "postman", "jest", "cypressio", "storybook", "sass", "tailwindcss", "bootstrap", "materialui", "redux", "mobx", "vuejs", "nuxtjs", "sveltekit", "nestjs", "expressjs", "fastify", "django", "flask", "rails", "laravel", "postgresql", "mysql", "mongodb", "redis", "sqlite", "nginx", "apache", "terraform", "ansible", "jenkins", "circleci", "travis", "bitbucket", "azuredevops", "digitalocean"],
    "crypto": ["btc", "eth", "sol", "ada", "dot", "avax", "matic", "link", "uni", "ltc", "doge", "shib", "atom", "xlm", "algo", "near", "ftm", "sand", "mana", "ape", "bnb", "xrp", "trx", "etc", "bch", "eos", "xtz", "vet", "theta", "fil", "aave", "comp", "mkr", "snx", "yfi", "crv", "sushi", "1inch", "grt", "enj"],
    "game-icons": ["dragon-shield", "magic-potion", "wizard-staff", "broadsword", "locked-chest", "spell-book", "fairy-wand", "anvil", "castle", "gem-pouch", "gorgon", "hydra", "kraken-tentacle", "minotaur", "ouroboros", "phoenix", "rune-stone", "scroll-unfurled", "vampire-dracula", "winged-sword", "crystal-ball2", "cauldron", "potion-ball", "spellbook2", "fairy-wings", "unicorn2", "pegasus", "griffin-symbol", "dragon-head", "elf-helmet", "wizard-face", "witch-flying", "crystal-shine", "magic-swirl", "fairy", "mermaid", "sea-serpent", "chalice", "ankh", "amulet", "gem-stack", "diamond-trophy", "treasure-map", "pouch", "leather-boot", "cloak", "castle-gate", "wooden-sign", "flowers", "four-leaf", "clover", "sun-symbol", "moon-orbit", "star-formation", "planet-conquest", "sparkles2", "acorn", "leaf-swirl", "flowering-vine", "butterfly-flower"],
    "country-flags": ["us", "gb", "ca", "au", "de", "fr", "it", "es", "jp", "kr", "cn", "in", "br", "mx", "za", "nz", "ch", "se", "nl", "ie", "pt", "gr", "no", "dk", "fi", "pl", "at", "be", "cz", "hu", "ro", "tr", "ru", "ua", "il", "ae", "sa", "eg", "ng", "ke", "ar", "cl", "co", "pe", "th", "vn", "ph", "id", "my", "sg"],
    "line-stickers": ["face-wink", "face-smile", "face-surprise", "face-cool", "heart-arrow", "star", "sparkles", "thumb-up", "gift", "trophy", "coffee", "ice-cream-cone", "pizza-slice", "rocket", "flying-saucer", "game-die", "musical-note", "high-voltage", "rainbow", "crown", "balloon", "birthday-cake", "confetti-ball", "party-popper", "wrapped-gift2", "sparkle", "glowing-star", "shooting-star2", "dizzy2", "comet2", "fire2", "collision2", "lightning-bolt2", "sun2", "cloud2", "rainbow2", "umbrella2", "droplet2", "snowflake2", "snowman2", "christmas-tree2", "jack-o-lantern", "ghost2", "santa"],

    "tabler": ["heart-filled", "star-filled", "moon-stars", "sparkles", "flower", "cat", "paw-filled", "ghost", "cloud-rain", "rainbow", "cookie", "coffee", "gift", "balloon", "candy", "diamond", "crown", "flame", "bolt", "confetti", "cherry", "apple", "strawberry", "grape", "leaf", "seedling", "sun", "moon", "cloud", "rain", "snowflake", "umbrella", "wind", "planet", "rocket-filled", "meteor", "compass", "map", "camera-filled", "music", "headphones", "microphone", "guitar-pick", "device-gamepad-2", "puzzle", "dice", "chess-knight", "trophy-filled", "medal", "target-arrow", "wand", "sparkle", "feather", "bird", "fish", "paw", "bug", "spider", "flower-2", "tree", "cactus", "mushroom", "clover", "hearts", "heart-hexagon", "mood-smile", "mood-happy", "mood-wink", "mood-kid", "sun-moon", "bulb-filled", "bell-filled", "anchor", "book-2", "brand-github", "cup", "beer", "wine", "milk", "bone", "paw-print", "footprints", "shirt", "hanger", "shopping-cart-filled", "wallet", "gift-card"],
    "lucide": ["heart", "sparkles", "star", "cat", "flower-2", "cloud-moon", "ghost", "candy", "cookie", "gift", "ice-cream-cone", "rainbow", "cherry", "grape", "flame", "gem", "party-popper", "wand-sparkles", "shell", "feather", "flower", "leaf", "sprout", "tree-pine", "trees", "cactus", "sun", "moon", "cloud", "cloud-rain", "cloud-snow", "umbrella", "wind", "snowflake", "rocket", "sparkle", "star-half", "smile", "laugh", "heart-handshake", "bird", "fish", "squirrel", "rabbit", "dog", "cat2", "turtle", "bug", "shell2", "apple", "banana", "grape2", "citrus", "candy-cane", "cookie2", "cake", "cake-slice", "coffee", "wine", "beer", "milk", "utensils", "chef-hat", "pizza", "sandwich", "soup", "egg", "carrot", "wheat", "music", "music-2", "headphones", "mic", "guitar", "drum", "puzzle", "dice-5", "gamepad-2", "trophy", "medal", "award", "compass", "map", "anchor", "sailboat", "umbrella-2", "wand", "crown", "gem2", "diamond"],
    "hugeicons": ["heart-check", "star", "moon-eclipse", "flower", "cat", "ghost", "cloud", "rainbow", "ice-cream", "cake", "gift", "balloons", "diamond", "crown", "rocket", "butterfly", "sun-cloud", "leaf-01", "candle", "magic-wand-01", "flower-02", "flower-03", "sun-01", "sun-02", "moon-01", "moon-02", "cloud-01", "cloud-angled-rain", "snow", "umbrella-01", "wind-01", "star-02", "sparkles-01", "cookie-01", "coffee-01", "coffee-cup", "wine-01", "tea-01", "apple-01", "cherry-01", "grape-01", "pineapple-01", "watermelon-01", "party-01", "confetti-01", "birthday-cake", "gift-01", "teddy-bear-01", "kite-01", "dice-01", "chess-01", "puzzle-01", "music-note-01", "guitar-01", "microphone-01", "headphones-01", "camera-01", "compass-01", "map-01", "anchor-01", "sailing-boat-01", "planet-01", "shooting-star-01", "hot-air-balloon", "unicorn", "dragon", "fish-01", "bird-01", "paw", "bone-01", "shell-01", "clover-01", "mushroom-01", "wheat-01"],
    "fa7-solid": ["heart", "star", "cat", "dog", "ghost", "cloud", "rainbow", "ice-cream", "cake-candles", "gift", "gem", "crown", "fire", "wand-magic-sparkles", "kiwi-bird", "dove", "leaf", "feather", "candy-cane", "seedling", "sun", "moon", "cloud-sun", "cloud-moon", "cloud-rain", "snowflake", "umbrella", "wind", "tree", "cannabis", "spa", "paw", "fish", "frog", "spider", "bug", "bee", "hippo", "horse", "dragon", "otter", "crow", "dove2", "kiwi-bird2", "shrimp", "carrot", "pepper-hot", "lemon", "apple-whole", "pizza-slice", "hotdog", "bacon", "cheese", "burger", "mug-hot", "wine-glass", "beer-mug-empty", "cocktail", "champagne-glasses", "candy-cane2", "cookie", "cookie-bite", "birthday-cake", "gifts", "trophy", "medal", "compass", "map", "anchor", "sailboat", "meteor", "moon2", "star-half", "sparkles2", "wand-magic", "hat-wizard", "mask", "guitar", "drum", "music", "headphones-simple", "microphone", "gamepad", "dice", "chess-knight", "puzzle-piece2"],

    "nerd-fonts": ["nf-fa-heart", "nf-fa-star", "nf-fa-ghost", "nf-fa-gift", "nf-fa-magic", "nf-fa-paw", "nf-fa-tree", "nf-fa-leaf", "nf-fa-diamond", "nf-fa-rocket", "nf-fa-moon_o", "nf-fa-sun_o", "nf-fa-fire", "nf-fa-cloud", "nf-fa-birthday_cake", "nf-fa-puzzle_piece", "nf-fa-graduation_cap", "nf-fa-umbrella", "nf-fa-anchor", "nf-fa-bicycle", "nf-fa-coffee", "nf-fa-flask", "nf-fa-music", "nf-fa-lemon_o", "nf-fa-dragon", "nf-fa-dove", "nf-fa-frog", "nf-fa-fish", "nf-fa-rainbow", "nf-fa-snowman", "nf-fa-cookie", "nf-fa-cookie_bite", "nf-fa-cow", "nf-fa-otter", "nf-fa-cat", "nf-fa-dog", "nf-fa-spider", "nf-fa-kiwi_bird", "nf-fa-hippo", "nf-fa-carrot", "nf-fa-cheese", "nf-fa-egg", "nf-fa-candy_cane", "nf-fa-holly_berry", "nf-fa-icicles", "nf-fa-mitten", "nf-fa-tornado", "nf-fa-cannabis", "nf-fa-seedling", "nf-fa-spa", "nf-fa-crow", "nf-fa-bug", "nf-fa-hotdog", "nf-fa-pepper_hot", "nf-fa-wine_glass", "nf-fa-beer", "nf-fa-cocktail", "nf-fa-shrimp", "nf-fa-drumstick_bite", "nf-fa-champagne_glasses", "nf-fa-mug_hot", "nf-fa-guitar", "nf-fa-drum", "nf-fa-gamepad", "nf-fa-dice", "nf-fa-chess_knight", "nf-fa-hat_wizard", "nf-fa-mask", "nf-fa-crown", "nf-fa-gem", "nf-fa-trophy", "nf-fa-medal", "nf-fa-compass", "nf-fa-map", "nf-cod-heart_filled", "nf-cod-sparkle", "nf-cod-flame", "nf-custom-vim"]
};

// License and attribution info per pack, as listed on https://icon-sets.iconify.design
const packLicenses = {
    "fc": { name: "Flat Color Icons", license: "MIT", author: "icons8" },
    "vivid": { name: "Streamline Emojis", license: "CC BY 4.0", author: "Streamline" },
    "logos": { name: "SVG Logos", license: "CC0", author: "gilbarbara" },
    "pixelarticons": { name: "Pixelarticons", license: "MIT", author: "halfmage" },
    "noto-v1": { name: "Noto Emoji (v1)", license: "Apache 2.0", author: "Google" },
    "twemoji": { name: "Twitter Emoji", license: "CC BY 4.0", author: "Twitter" },
    "openmoji": { name: "OpenMoji", license: "CC BY-SA 4.0", author: "OpenMoji" },
    "fxemoji": { name: "Firefox OS Emoji", license: "Apache 2.0", author: "Mozilla" },
    "bxs": { name: "BoxIcons v2 Solid", license: "MIT", author: "atisawd" },
    "grommet": { name: "Grommet Icons", license: "Apache 2.0", author: "grommet" },
    "fluent-emoji": { name: "Fluent Emoji Flat", license: "MIT", author: "Microsoft" },
    "emojione": { name: "Emoji One (Colored)", license: "CC BY 4.0", author: "Ranks.com" },
    "3dicons": { name: "3D Icons Color", license: "CC0", author: "Vijay Verma" },
    "blob": { name: "Noto Emoji (v1)", license: "Apache 2.0", author: "Google — used as Blobmoji fallback" },
    "kaomoji": { name: "Kaomoji", license: "Public domain text characters", author: "—" },
    "swe-stickers": { name: "Devicon", license: "MIT", author: "devicon team" },
    "crypto": { name: "Cryptocurrency Color Icons", license: "CC0", author: "Christopher Downer" },
    "game-icons": { name: "Game Icons", license: "CC BY 3.0", author: "game-icons.net" },
    "country-flags": { name: "Circle Flags", license: "MIT", author: "HatScripts" },
    "line-stickers": { name: "Fluent Emoji Flat", license: "MIT", author: "Microsoft — used as sticker fallback" },
    "tabler": { name: "Tabler Icons", license: "MIT", author: "Paweł Kuna" },
    "lucide": { name: "Lucide", license: "ISC", author: "Lucide Contributors" },
    "hugeicons": { name: "Huge Icons", license: "MIT", author: "Hugeicons" },
    "fa7-solid": { name: "Font Awesome 7 Solid", license: "CC BY 4.0", author: "Fonticons, Inc." },
    "nerd-fonts": { name: "Nerd Fonts", license: "MIT (font patcher) — individual glyph sets retain their own upstream licenses (see nerdfonts.com)", author: "Ryan L McIntyre / nerd-fonts contributors" }
};

// Maps friendly pack keys to real Iconify collection prefixes.
// See https://icon-sets.iconify.design for the full catalog of valid prefixes.
function getIconPrefix(pack) {
    switch (pack) {
        case 'fc': return 'flat-color-icons';
        case 'vivid': return 'streamline-emojis';
        case 'logos': return 'logos';
        case 'pixelarticons': return 'pixelarticons';
        case 'noto-v1': return 'noto-v1';
        case 'twemoji': return 'twemoji';
        case 'openmoji': return 'openmoji';
        case 'fxemoji': return 'fxemoji';
        case 'bxs': return 'bxs';
        case 'grommet': return 'grommet-icons';
        case 'fluent-emoji': return 'fluent-emoji';
        case 'emojione': return 'emojione';
        case '3dicons': return '3d-icons-color';
        case 'blob': return 'noto-v1';
        case 'swe-stickers': return 'devicon';
        case 'crypto': return 'cryptocurrency-color';
        case 'game-icons': return 'game-icons';
        case 'country-flags': return 'circle-flags';
        case 'line-stickers': return 'fluent-emoji-flat';
        case 'tabler': return 'tabler';
        case 'lucide': return 'lucide';
        case 'hugeicons': return 'hugeicons';
        case 'fa7-solid': return 'fa7-solid';
        default: return '';
    }
}

// Builds the plain, static SVG URL for a given icon — no JS framework required
// to use it. This is Iconify's public SVG API, e.g.:
// https://api.iconify.design/twemoji/rocket.svg
function getSvgUrl(prefix, name) {
    return `https://api.iconify.design/${prefix}/${name}.svg`;
}

function loadPack(packKey) {
    const grid = document.getElementById('assetGrid');
    const count = document.getElementById('count');
    const licenseInfo = document.getElementById('licenseInfo');
    if (!grid || !count) return;

    grid.innerHTML = '';

    const assets = assetDatabase[packKey] || [];
    const prefix = getIconPrefix(packKey);
    const license = packLicenses[packKey];

    count.textContent = `${assets.length} items`;

    if (licenseInfo && license) {
        licenseInfo.textContent = `${license.name} — ${license.license} — ${license.author}`;
    } else if (licenseInfo) {
        licenseInfo.textContent = '';
    }

    assets.forEach(asset => {
        const card = document.createElement('div');
        card.className = 'item-card';

        let copyString = '';

        if (packKey === 'kaomoji') {
            const value = document.createElement('div');
            value.className = 'kaomoji-value';
            value.textContent = asset;
            card.appendChild(value);
            copyString = asset;
        } else if (packKey === 'nerd-fonts') {
            const iconWrap = document.createElement('div');
            iconWrap.className = 'item-icon';

            const iconEl = document.createElement('i');
            iconEl.className = `nf ${asset}`;
            iconWrap.appendChild(iconEl);

            card.appendChild(iconWrap);
            copyString = `<i class="nf ${asset}"></i>`;
        } else {
            const svgUrl = getSvgUrl(prefix, asset);
            const iconWrap = document.createElement('div');
            iconWrap.className = 'item-icon';

            const imgEl = document.createElement('img');
            imgEl.src = svgUrl;
            imgEl.alt = asset;
            imgEl.width = 32;
            imgEl.height = 32;
            imgEl.loading = 'lazy';
            iconWrap.appendChild(imgEl);

            card.appendChild(iconWrap);
            copyString = `<img src="${svgUrl}" alt="${asset}" width="32" height="32">`;
        }

        const label = document.createElement('div');
        label.className = 'item-name';
        label.textContent = asset;
        card.appendChild(label);

        card.onclick = () => {
            navigator.clipboard.writeText(copyString).then(() => {
                showToast(`copied "${asset}"`);
            }).catch(() => {
                showToast('copy failed');
            });
        };

        grid.appendChild(card);
    });
}

function showToast(message) {
    const msg = document.createElement('div');
    msg.className = 'copied-msg';
    msg.textContent = message;
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 1600);
}

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const root = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
            themeToggle.textContent = 'light';
        } else {
            root.removeAttribute('data-theme');
            themeToggle.textContent = 'dark';
        }
    }

    const savedTheme = localStorage.getItem('icons-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const isDark = root.getAttribute('data-theme') === 'dark';
        const next = isDark ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('icons-theme', next);
    });
}

function init() {
    const selector = document.getElementById('packSelector');
    if (selector) {
        selector.addEventListener('change', (e) => {
            loadPack(e.target.value);
        });
    }

    initThemeToggle();
    loadPack(selector ? selector.value : 'fc');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
