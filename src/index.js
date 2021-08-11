const loaderUtils = require('loader-utils');

module.exports = function loader(source) {
  if (!source) return ''
  try {
    // merge options
    const options = Object.assign({
      regExp: /(^|\s+)[a-z]{1}/g,
      esModule: true,
      outputPath: '.',
      fileName: null,
      processor: null
    }, loaderUtils.getOptions(this))

    // convert to capitalize
    const output = options.processor ? options.processor(source, options) : source.toLowerCase().replace(options.regExp, match => match.toUpperCase())

    // output the result into a file if provide the 'outputPath'
    if (options.fileName) {
      const fs = require('fs')
      const path = require('path')
      const pathName = path.resolve(process.cwd(), options.outputPath)
      const fileName = loaderUtils.interpolateName(this, options.fileName, {
        content: output
      });
      const writeFile = () => {
        fs.writeFileSync(path.join(pathName, fileName), output, 'utf-8')
      }
      if (!fs.existsSync(pathName)) {
        fs.mkdirSync(pathName);
        writeFile()
      } else {
        writeFile()
      }
    }

    return `${options.esModule ? 'export default' : 'module.exports ='} ${JSON.stringify(output)}`
  } catch (error) {
    return new Error(error)
  }
}