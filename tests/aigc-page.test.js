const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = fs.readFileSync(path.join(root, "layout.css"), "utf8");
const js = fs.readFileSync(path.join(root, "script.js"), "utf8");

assert.match(html, /data-page-target="aigc"/, "AIGC nav entry should be wired to page switching");
assert.match(html, /<section id="aigc"[^>]*data-page="aigc"/, "AIGC page section should exist");
assert.match(html, /class="aigc-book-spread"/, "AIGC page should render the book spread");

assert.match(css, /\.aigc-page\b/, "AIGC page styles should exist");
assert.match(css, /\.aigc-page-curl\b/, "AIGC page curl affordance should be styled");
assert.match(css, /\.aigc-showcase-grid\b/, "AIGC book should include a gallery-style showcase grid");
assert.match(css, /rgba\(92, 58, 34, 0\.42\)/, "Book frame should use a lighter refined wood tone");

assert.match(js, /const AIGC_BOOK_ITEMS\s*=/, "AIGC book data should be centralized in script.js");
assert.match(js, /kind:\s*"showcase"/, "AIGC first spread should use a showcase page like the reference");
assert.match(js, /aigcNextButton/, "AIGC next-page control should be wired");
assert.match(js, /wheel/, "AIGC page should support wheel-based page turns");
