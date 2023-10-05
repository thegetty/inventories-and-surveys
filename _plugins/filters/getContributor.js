//
// CUSTOMIZED FILE
// Add the page-level sort_as value if included with a contributor id
//
const chalkFactory = require('~lib/chalk')

const logger = chalkFactory('filters:getContributor')

/**
 * Looks up a contributor in publication.yaml[contributor] by id
 * @param  {Object} eleventyConfig
 * @param  {Object} contributor
 * @return {Object}                contributor
 */
module.exports = function (eleventyConfig, item) {
  if (!item) return ''

  // If contributor object is defined on the page, return it
  if (item.full_name || (item.first_name && item.last_name)) {
    return item
  }

  // Look up contributor by id in `publication` global data
  const { publication } = eleventyConfig.globalData
  const contributor = publication.contributor.find(
    (contributor) => contributor.id === item.id
  )

  if (!contributor) {
    logger.error(`Contributor not found in 'publication.yaml.' Contributor: `, item)
    return ''
  }

  // Add local sort_as value if one is provided
  item.sort_as ? contributor.sort_as = item.sort_as : ''

  return contributor
}
