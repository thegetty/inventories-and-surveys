This is the repository for *Inventories and Surveys for Heritage Management: Lessons for the Digital Age*, by David Myers and Janet Hansen. This digital book was first published July 25, 2024, by the J. Paul Getty Museum. It is available online at https://www.getty.edu/publications/inventories-and-surveys/ and may be downloaded there free of charge in multiple formats.

## About the Book

A critical first step in the conservation of cultural heritage is to identify and understand the places we want to protect. Inventories and related data collection activities such as surveys are essential tools in this effort, and heritage-related legislation across the globe now universally mandates their use. However, despite wide understanding of the importance and critical role of inventories and surveys in documenting heritage places, practical, up-to-date guidance on how these instruments should be created, implemented, and maintained has been sorely lacking—until now.

This publication provides a step-by-step guide to identifying, recording, and managing information on heritage resources as a basis for their conservation and management. It is drawn from the Getty Conservation Institute’s two decades of experience and research in this topical area, including ongoing work related to its open-source [Arches Cultural Heritage Data Management Platform](https://www.archesproject.org/) and, previously, the creation of the Middle Eastern Geodatabase for Antiquities (MEGA)-Jordan. It is also drawn from SurveyLA, a multiyear undertaking that was a joint project of the City of Los Angeles and Getty and is considered the largest American urban historic resource survey to date.

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/inventories-and-surveys/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).

## Development Notes

This project was last built with the following software versions:

- Node 18.16.0
- Quire CLI 1.0.0-rc.11

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch |
| `first-pages`, `second-pages`, `final-pages`| Versions of the project at various staages |
| `forthcoming` | A static placeholder page that was displayed at the book’s final URL on getty.edu prior to publication |
| `revisions` | Any revisions currently under consideration but not yet published |

### Figure Images Submodule

Some of figure images for *Inventories and Surveys* are licensed from third parties for use exclusively in this publication. As such, they are kept in a separate, private repository, https://github.com/thegetty/inventories-and-surveys/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/inventories-and-surveys.git
```

### Previewing the Online Edition Locally

1. Install Node.js 18.16.0 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.11`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

### Creating a PDF Version

1. Switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

3. If the PDF will be sent to digital printer, run the following command to ensure color profiles are correct:

    ```
    magick mogrify -profile bin/adobe-rgb-1998.icm _site/iiif/**/print-image.jpg
    ```

4. With PrinceXML 14.2 installed, run `quire pdf --lib prince`

### Creating an EPUB Version

TK

### Customizations

**_includes/components/contributor/bio.js**
Changed .quire-contributor__page-link handling to remove target="_blank"

**_includes/components/icon.js**
Used `oneLine` instead of `html` so that the include could be used in Markdown files

**_includes/components/icons.js**
Add custom (bolder) version of full-screen icon to match design customizations

**_includes/components/copyright/licensing.js**
Added customLicenseText regarding image rights holders

**_includes/components/license-icons.js**
Exclude SVG icons from EPUB output

**_includes/components/menu/header.js**
Added individual title and subtitle elements

**_includes/components/menu/item.js**
Add subtitles, and Foreword contributors with affiliations to sidebar menu

**_includes/components/navigation.js** 
Add missing .nav-label span to hide labels on mobile, and remove title truncation

**_includes/components/table-of-contents/item/list.js**
Added affiliations for Foreword authors, and added listing of any sidebars in the chapter

**_layouts/cover.liquid**
Remove unused reading_line element, and hard-coded <em> tags on contributors

**_plugins/filters/fullname.js**
Joined contributor names with a non-breaking space

**_plugins/filters/getContributor.js**
Add the page-level sort_as value if included with a contributor id

**_plugins/markdown/index.js**
Create better line breaks for URLs, per Chicago Manual of Style

**_plugins/shortcodes/cite.js**
Return plain cite id if no match is found in references.yaml

**_plugins/shortcodes/contributors.js**
Refactor logic to handle oxford commas correctly, and add affiliations to Foreword authors

**_plugins/shortcodes/figureGroup.js**
Simplify markup and enable custom classes and group captions for figure groups

**_plugins/transforms/outputs/pdf/transform.js**
Remove title truncation from PDF footer

**content/_assets/javascript/application/index.js**
Added copyURL() function to strip zero-width spaces from URLs on copy, which were added to improve URL line breaks;
Added '.sidebar-list a' to invalidHashLinkSelectors as sidebar links were breaking on section landing pages

**content/_computed/eleventyComputed.js**
Added `sidebar` to global page data, for listing sidebars in TOC in `_includes/components/table-of-contents/item/list.js`

## License

© 2024 J. Paul Getty Trust

The text of this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>. All images are reproduced with the permission of the rights holders acknowledged in captions and are expressly excluded from the CC BY-NC license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights. 
