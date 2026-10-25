# Spudlab Project Hugo theme

A focused, accessible Hugo theme for a **single project**. It carries the visual language of the [Spudlab theme](https://github.com/spudlab-xyz/spudlab-theme) into a project landing page with features, onboarding, help, and structured documentation.

[View the example site](https://spudlab-xyz.github.io/spudlab-project-theme/)

## Features

- Configurable project hero, feature grid, onboarding steps, and final call to action
- First-class documentation with nested sidebar navigation, breadcrumbs, table of contents, and previous/next links
- Responsive layouts, automatic light/dark mode, keyboard navigation, visible focus states, and reduced-motion support
- Configurable identity, Spudlab colour defaults, navigation, project links, social metadata, and custom assets
- Generic content pages for project background, governance, releases, or other supporting information
- Documentation callouts and readable code, tables, blockquotes, and long-form content
- More than 1,900 locally bundled [Lucide](https://lucide.dev/) icons with no icon font, client library, or CDN
- No external fonts, JavaScript libraries, trackers, or separate frontend build tools

## Requirements

Hugo **0.123.0** or newer (extended or standard edition).

## Install

Add the theme to a Hugo site as a Git submodule:

```sh
git submodule add https://github.com/spudlab-xyz/spudlab-project-theme.git themes/spudlab-project-theme
```

Then select it in `hugo.yaml`:

```yaml
theme: spudlab-project-theme
```

You can instead copy this repository to `themes/spudlab-project-theme`.

## Site configuration

A useful starting point is:

```yaml
baseURL: https://project.example/
languageCode: en-gb
title: Project name
theme: spudlab-project-theme

enableRobotsTXT: true

menus:
  main:
    - name: Features
      url: /#features-title
      weight: 10
    - name: Documentation
      pageRef: /docs
      weight: 20
    - name: About
      pageRef: /about
      weight: 30
  footer:
    - name: Report an issue
      url: https://github.com/example/project/issues

params:
  brandName: Project name
  description: A concise description used in metadata.
  author: Project maintainers
  logo: images/logo.svg
  favicon: images/favicon.svg
  socialImage: images/social-card.png
  dateFormat: 2 January 2006
  showTableOfContents: true
  themeToggle: true
  copyright: Project maintainers

  madeBy:
    label: Made by
    name: Spudlab
    url: https://spudlab.xyz/

  headerAction:
    label: View source
    url: https://github.com/example/project

  colors:
    dark: "#373b3e"
    neutral: "#bec8d1"
    accent: "#86cecb"
    support: "#137a7f"
    emphasis: "#e12885"

  footer:
    description: A longer project description for the footer.
    license: Documentation is available under CC BY 4.0.

  links:
    - name: GitHub
      url: https://github.com/example/project
```

Put logo, favicon, and social image files in the site's `static/images` directory. The optional `madeBy` block adds a configurable maker credit beside the project identity; omit it to show only the project logo and name. Set `themeToggle: false` to hide the three-state colour control; the site will still follow the operating-system preference. `showTableOfContents` defaults to true.

### Homepage

The homepage is configured in `content/_index.md`. Every group is optional, so use only the sections the project needs:

```yaml
---
title: Project name
eyebrow: A short project proposition
heroTitle: The main benefit in one clear sentence.
heroText: Explain what the project does, who it helps, and why it is useful.
actions:
  - label: Get started
    url: /docs/getting-started/
  - label: Read the docs
    url: /docs/
featuresEyebrow: Why this project
featuresTitle: Features that support the work
featuresIntro: Optional introduction to the feature cards.
features:
  - icon: bolt
    title: Fast
    text: Explain the user benefit, not only the implementation.
    url: /docs/
  - icon: shield
    title: Reliable
    text: Describe another important capability.
stepsEyebrow: Get started
stepsTitle: From install to first result
steps:
  - title: Install
    text: Install the project for your platform.
    url: /docs/getting-started/installation/
cta:
  eyebrow: Need help?
  title: Find an answer in the documentation.
  text: Optional supporting text.
  action:
    label: Get help
    url: /docs/
---
```

Feature and section-card icons use the locally bundled **Lucide Static 1.61.0** catalogue. Set `icon` to any kebab-case name from the [Lucide icon directory](https://lucide.dev/icons/), such as `rocket`, `scan-line`, `badge-check`, `file-braces`, or `book-open`:

```yaml
features:
  - icon: satellite
    title: Works remotely
    text: Collect observations wherever the work happens.
```

Icons are loaded from the theme's same-origin SVG sprite, so builds and deployed sites make no third-party request. Lucide's licence is retained in [`static/icons/LUCIDE-LICENSE.txt`](static/icons/LUCIDE-LICENSE.txt). Homepage body Markdown, if present, appears between the steps and final call to action.

## Documentation

Place help content below `content/docs`. Hugo section bundles produce the navigation hierarchy:

```text
content/
└── docs/
    ├── _index.md
    ├── getting-started/
    │   ├── _index.md
    │   ├── installation.md
    │   └── first-project.md
    └── guides/
        ├── _index.md
        └── configuration.md
```

Set `weight` in each page's front matter to control both sidebar and section-card order:

```yaml
---
title: Installation
description: Install the project and verify it is ready.
weight: 10
---
```

Create a documentation page with the bundled archetype:

```sh
hugo new content docs/getting-started/installation.md --kind docs
```

### Callouts

Use the bundled shortcode for notes and warnings:

```go-html-template
{{</* callout title="Before you begin" */>}}
Keep a backup of your configuration.
{{</* /callout */>}}

{{</* callout type="warning" title="Take care" */>}}
This operation cannot be undone.
{{</* /callout */>}}
```

### Other pages

Content outside `docs` uses a clean generic page or section layout. For example, `content/about/index.md` renders a standalone About page. A branch bundle with child pages renders those pages as cards.

### Custom CSS and JavaScript

Load site-specific files after the theme assets without modifying the theme:

```yaml
params:
  customCSS: [css/custom.css]
  customJS: [js/custom.js]
```

Paths are relative to the site's `static` directory.

## Run the example

From this repository:

```sh
hugo server --source exampleSite --themesDir ../.. --theme spudlab-project-theme
```

Create the same strict production build used by CI:

```sh
hugo --source exampleSite --themesDir ../.. --theme spudlab-project-theme --minify --gc --panicOnWarning
```

The GitHub Pages workflow builds the example on updates to `main`. Before its first run, select **GitHub Actions** under **Settings → Pages**. Tags beginning with `v` run the strict build and release workflow. Maintainer steps are documented in [RELEASING.md](RELEASING.md).

## Accessibility

The theme provides semantic landmarks, skip navigation, no-JavaScript navigation fallback, visible focus styles, responsive content, reduced-motion support, and print styles. Site owners remain responsible for meaningful link wording, image alternatives, heading order, readable custom colours, and accessible documentation content.

## Licence

Licensed under the [Apache License 2.0](LICENSE). The default palette follows Spudlab's visual identity; projects should supply their own name and appropriate logo.
