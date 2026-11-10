# LarpScripts

A Spotify-inspired public script library built with plain HTML, CSS, and JavaScript.

## Run locally
1. Extract the ZIP.
2. Open `index.html` in your browser.

## Deploy to Vercel
1. Create a GitHub repository named `LarpScripts`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Go to https://vercel.com and sign in with GitHub.
4. Choose **Add New → Project**, import `LarpScripts`, then click **Deploy**.
5. No build command is needed for this static HTML project. Leave the output directory as `./` if Vercel asks.

## Add a script
In `index.html`, duplicate one `<article class="script-card">...</article>` block inside `#script-grid`.
Update its title, description, category, search keywords, filename, code preview, and the button's `data-copy` attribute.
The `data-copy` attribute must contain the exact plain-text code to copy. For quotes, use `&quot;`; for line breaks, use `&#10;` or `\n` in the attribute.

## Notes
- The sample snippets are harmless Lua examples.
- Review code before running it.
- The site is public and does not have a login system.
