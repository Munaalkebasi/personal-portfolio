# Muna Al-Kebasi — Personal portfolio

A responsive engineering portfolio built with plain HTML, CSS, and a small JavaScript file. No framework, build step, package installation, external font service, or analytics.

## Files

- `index.html`: all text, project details, and links
- `styles.css`: responsive layout and original concept illustrations
- `script.js`: accessible mobile navigation and the footer year
- `assets/favicon.svg`: custom favicon
- `resume.pdf`: the supplied résumé, unchanged
- `.nojekyll`: serve the files directly on GitHub Pages

## Publish on GitHub Pages

1. Put these files in the root of `Munaalkebasi/personal-portfolio` on the `main` branch. Keep `assets/favicon.svg` inside its `assets` folder.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Choose **main**, **/ (root)**, then **Save**.
5. Wait for GitHub’s Pages deployment to finish. The site address is:
   `https://munaalkebasi.github.io/personal-portfolio/`

All local links are relative, so the site works under this repository subpath. Future pushes to the publishing branch update the site automatically. GitHub Pages configuration documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Preview and edit

Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

Edit copy and destinations in `index.html`. Replace `resume.pdf` with a newer PDF using the same filename. Colour variables are at the top of `styles.css`.

## Content accuracy

The biography, education, skills, employment, volunteering, and contact details come from the supplied résumé. Study Sprout details also come from the owner's project description; repository addresses were verified against the public GitHub repository list. WEIN's live address comes from the résumé and repository homepage.

The robotics entry intentionally stays within the hands-on programming, sensors, actuators, and data-acquisition work described by the owner. It makes no claims about unverified performance, team size, dates, or specific robot behaviours. No course names are shown, following the owner's earlier preference.

Illustrations are original conceptual graphics, explicitly labelled as concepts; they are not screenshots or photographs of the actual projects. No unverified project URL or invented credential is included. The original résumé includes the contact information supplied by its owner.

## Accessibility

Semantic sections, a skip link, keyboard focus indicators, labelled diagrams, native expandable project details, reduced-motion support, and navigation that works without JavaScript. External links stay in the same tab. Contact uses an email link rather than a form that would need a server.
