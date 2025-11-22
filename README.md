# Bootstrap Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

A small, responsive portfolio website built with Bootstrap, semantic HTML, modular CSS, and lightweight client-side JavaScript. This repository contains the source for a single-page portfolio (hero, about, projects, contact) with projects rendered from a small data module.

![Site preview](https://raw.githubusercontent.com/leightongrant/bootstrap-portfolio-step8up/main/assets/images/screenshot.webp)

## Live demo

[![Live demo](https://img.shields.io/badge/Live%20Demo-View-brightgreen?style=for-the-badge)](https://leightongrant.github.io/bootstrap-portfolio-step8up/)

## Overview

-   Single HTML entry: `index.html` — sections: Hero, About, Projects, Contact
-   Projects are defined in `assets/scripts/data.js` and rendered by `assets/scripts/script.js`
-   Built with Bootstrap 5 and small, focused custom CSS in `assets/css/style.css`

## Features

-   Responsive layout using Bootstrap's grid system
-   Accessible, semantic markup
-   Projects dynamically generated from a small JS data file
-   Modern image assets in WebP format for good performance

## Tech stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=white&style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

-   HTML5
-   CSS3 (Bootstrap 5 + custom styles)
-   JavaScript (ES modules + jQuery used for DOM convenience)

## Quick start

1. From the project root you can open `index.html` directly in a browser for a simple view. Note: since `assets/scripts/script.js` uses ES module imports, some browsers may block loading modules from the file system. To avoid that, serve the folder with a simple HTTP server:

```bash
# from the project root
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```

Or, if you prefer Node and have http-server installed:

```bash
npx http-server -c-1 -p 8000
# then visit http://localhost:8000
```

## Development notes

-   Add or edit projects in `assets/scripts/data.js`. Each project object has the shape:

```js
{
  id: 1,
  image: './assets/images/project-1.webp',
  title: 'Project Title',
  text: 'Short description...',
  repo: 'https://github.com/your/repo',
  demo: 'https://your-demo-url'
}
```

-   `assets/scripts/script.js` imports the `projects` array and renders cards into the `.project-content` container.

## Project structure (high level)

-   index.html — main page
-   assets/
    -   css/ — `style.css` (and other CSS assets)
    -   images/ — webp images used by the site
    -   scripts/ — `data.js`, `script.js`
-   LICENSE — project license (MIT)

## Contributing

Small improvements are welcome: accessibility fixes, responsive tweaks, copy updates, or additional projects. Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License — see the `LICENSE` file for details.

## Contact

For questions or feedback you can reach the author via the email in the site footer or by opening an issue in this repository.
