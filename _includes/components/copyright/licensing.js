//
// CUSTOMIZED FILE 
// Added customLicenseText regarding image rights holders
//
const { oneLine } = require('~lib/common-tags')

module.exports = function(eleventyConfig) {
  return function (params) {
    const { publication } = eleventyConfig.globalData
    const { license } = publication

    let licenseText = ''

    const licenseAbbreviation = license.abbreviation || license.name
    const licenseName = license.url
      ? `<a rel="license" href="${license.url}" target="_blank">${license.name}</a>`
      : license.name

    if (license.scope == 'some-exceptions') {
      licenseText += `
        Unless otherwise indicated, this work is licensed under a ${licenseName}.
      `
    } else if (license.scope === 'text-only') {
      licenseText += `
        The text of this work is licensed under a ${licenseName}.
      `
    } else {
      licenseText += `
        This work is licensed under a ${licenseName}.
      `
    }

    const customLicenseText = `All images are reproduced with the permission of the copyright holders acknowledged in the captions and are expressly excluded from the ${licenseAbbreviation} license covering the rest of this publication. These images may not be reproduced, copied, transmitted, or manipulated without consent from the owners, who reserve all rights.`

    return oneLine`
      ${licenseText}
      <span class="is-print-only">
        To view a copy of this license visit ${license.url}.
      </span>
      ${customLicenseText}
    `
  }
}
