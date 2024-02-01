## Quire Eleventy

The [Quire Eleventy package](https://github.com/thegetty/quire/tree/main/packages/11ty) contains configuration and modules for the [Eleventy static site generator](https://11ty.dev). This package is published to npm as [`@thegetty/quire-11ty`](https://www.npmjs.com/package/@thegetty/quire-11ty) and installed by the [`@thegetty/quire-cli`](https://www.npmjs.com/package/@thegetty/quire-cli) to build [Quire](https://quire.getty.edu) projects.

### Quire Eleventy Features

#### Components and Shortcodes

Component-driven page templates using [shortcode components](https://github.com/thegetty/quire/tree/main/packages/11ty/_includes/components) and [universal template shortcodes](https://www.11ty.dev/docs/shortcodes/#universal-shortcodes) that support [JavaScript](https://www.11ty.dev/docs/languages/javascript/), [Liquid](https://www.11ty.dev/docs/languages/liquid/), [Nunjucks](https://www.11ty.dev/docs/languages/nunjucks/), and [WebC](https://www.11ty.dev/docs/languages/webc/) templates.

#### Image Processing

Automatic processing of images as [IIIF](https://iiif.io) assets.

#### PDF Output

Generates HTML output for generation of PDF books using [`Paged.js`](https://pagedjs.org)

#### EPUB Output

Generates HTML output for generation of EPUB book using [`EPUB.js`](http://futurepress.org)



**_includes/components/icon.js**
Used `oneLine` instead of `html` so that the include could be used in Markdown files

**_includes/components/icons.js**
Add custom (bolder) version of full-screen icon to match design customizations

**_includes/components/menu/header.js**
Added individual title and subtitle elements

**_includes/components/menu/item.js**
Add subtitles, and Foreword contributors with affiliations to sidebar menu

**_includes/components/table-of-contents/item/list.js**
Added affiliations for Foreword authors

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
Added copyURL() function to strip zero-width spaces from URLs on copy, which were added to improve URL line breaks