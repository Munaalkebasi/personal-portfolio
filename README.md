# Muna Al-Kebasi — Engineering portfolio

A compact, responsive portfolio built with HTML and one external CSS file.

## Files

- `index.html`: biography, projects, skills, experience, and contact links
- `styles.css`: all typography, colours, layout, responsive rules, and print styling
- `assets/favicon.svg`: existing favicon
- `resume.pdf`: original résumé, unchanged
- `.nojekyll`: retained for static GitHub Pages hosting

## Preview and edit

Open `index.html` in a browser. No installation or build step is required. Edit content in `index.html` and presentation in `styles.css`. Replace the résumé using the same filename when needed.

The layout is capped at 960px. Navigation remains visible and wraps on small screens. Project and experience rows stack on phones. Keyboard focus indicators, a skip link, semantic headings, and print styling are included.

## GitHub Pages

Keep the files in the publishing branch's root and retain the repository's existing Pages configuration. All asset paths are relative, including the stylesheet and résumé, so the site works at `https://munaalkebasi.github.io/personal-portfolio/` and when opened locally.

## Content

The existing portfolio's SFU education, project details, skills, employment, volunteering, and contact destinations are preserved. The robotics description remains limited to the existing programming, sensors, actuators, and data-acquisition work. No performance metrics, new credentials, or unverified project links have been added.

The three project illustrations share a field-note style: dotted paper, fine engineering lines, and blue annotations. They are labelled concept sketches, not project screenshots or claims about a particular robot. SVG geometry is embedded in the HTML; all visual styling remains in styles.css.

The Automated Vision & Sensor Sorting Station and Robot Drive Assembly are two separate CAD projects with direct Autodesk drawing links. The sorting station has one drawing link; the robot drive project has module and assembly drawing links. The viewer requires Autodesk sign-in. Its description covers the completed 2D concept drawing and visible components, dimensions, layers/key, annotations, and notes. It does not claim a built or tested system or an ultrasonic sensor.

The visual direction uses a dark navy background, soft blue typography, larger project sketches beside each case study, numbered section headings, and a dark green skills panel.

CSS motion includes flowing diagram signals, gently pulsing joints, leaf movement, and hover feedback. A visible pause control stops repeating animations, and reduced-motion preferences disable motion automatically.
