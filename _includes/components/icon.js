//
// CUSTOMIZED FILE
// Use `oneLine` instead of `html` to allow for clean use in Markdown files
//
const { oneLine } = require('~lib/common-tags')
const path = require('path')

/**
 * A shortcode for including an inline SVG icon with a PNG fallback.
 *
 * Should be passed with a "type" that corresponds to an id in the "icons" partial, and an optional "description"
 *
 * @example.js
 * icon("link", "Open in new window")
 *
 * @example.liquid
 * {% icon type="link", description="Open in new window" %}
 */
module.exports = function(eleventyConfig) {
  const { imageDir } = eleventyConfig.globalData.config.figures

  return function (params) {
    const { description, type } = params
    const descriptionElement = description
      ? `<span class="visually-hidden" data-outputs-exclude="epub,pdf">${description}</span>`
      : ''

    return oneLine`
      <svg data-outputs-exclude="epub,pdf">
        <switch>
          <use xlink:href="#${type}-icon"></use>
        </switch>
      </svg>
      ${descriptionElement}
    `
  }
}
