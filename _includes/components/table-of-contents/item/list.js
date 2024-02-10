//
// CUSTOMIZED FILE
// added 'foreword' format to add affiliations to Foreword authors, lines 52-54
// added listing of any sidebars in the chapter, lines 73–83, 96
//
const { html, oneLine } = require('~lib/common-tags')

/**
 * Renders a TOC list item
 *
 * @param     {Object} context
 * @param     {String} params
 * @property  {Array} children - The TOC page item's child pages
 * @property  {String} page - The TOC item's page data
 * @property  {String} presentation How the TOC should display. Possible values: ['abstract', 'brief']
 *
 * @return {String} TOC list item markup
 */
module.exports = function (eleventyConfig) {
  const contributors = eleventyConfig.getFilter('contributors')
  const icon = eleventyConfig.getFilter('icon')
  const markdownify = eleventyConfig.getFilter('markdownify')
  const pageTitle = eleventyConfig.getFilter('pageTitle')
  const removeHTML = eleventyConfig.getFilter('removeHTML')
  const { contributorDivider } = eleventyConfig.globalData.config.tableOfContents

  return function (params) {
    const {
      children='',
      classes=[],
      page,
      presentation
    } = params

    const {
      abstract,
      contributor: pageContributors,
      label,
      layout,
      short_title,
      sidebar,
      subtitle,
      summary,
      title
    } = page.data

    /**
     * Check if item is a reference to a built page or just a heading
     * @type {Boolean}
     */
    const isPage = !!layout

    const pageContributorsElement = pageContributors && (title == 'Foreword')
      ? `<span class="contributor-divider">${contributorDivider}</span><span class="contributor">${contributors({ context: pageContributors, format: 'foreword' })}</span>`
      : pageContributors
      ? `<span class="contributor-divider">${contributorDivider}</span><span class="contributor">${contributors({ context: pageContributors, format: 'string' })}</span>`
      : ''

    let pageTitleElement
    if (presentation === 'brief') {
      pageTitleElement = short_title || title
    } else {
      pageTitleElement = oneLine`${pageTitle({ label, subtitle, title })}${pageContributorsElement}`
    }
    const arrowIcon = `<span class="arrow" data-outputs-exclude="epub,pdf">${icon({ type: 'arrow-forward', description: '' })}</span>`

    // Returns abstract with any links stripped out
    const abstractText =
      presentation === 'abstract' && (abstract || summary)
        ? `<div class="abstract-text">${ removeHTML(markdownify(abstract)) }</div>`
        : ''

    let sidebarList = ''
    if (sidebar) {
      let sidebarItems = []
      for (item of sidebar) {
        const sidebarLink = item.id ? `${page.url}#${item.id}` : ''
        const contributorElement = item.contributor ? ` — ${item.contributor}` : ''
        const titleElement = item.title ? `Sidebar: ${item.title}` : ''
        sidebarItems += `<li><a href="${sidebarLink}">${titleElement}${contributorElement}</a></li>`
      }
      sidebarList = `<ul class="sidebar-list">${sidebarItems}</ul>`
    }

    let mainElement = `${markdownify(pageTitleElement)}${isPage && !children ? arrowIcon : ''}`

    if (isPage) {
      mainElement = `<a href="${page.url}">${mainElement}</a>`
    } else {
      classes.push('no-landing')
    }

    return html`
      <li class="${classes.join(' ')}">
        ${mainElement}
        ${sidebarList}
        ${abstractText}
        ${children}
      </li>
    `
  }
}
