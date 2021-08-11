const loader = require('../src/index')
const fs = require('fs')
const path = require('path')
describe('==== Test Output ====', () => {
  test('capitalize', () => {
    const ctx = {}
    const src = 'I like skating.'
    const res = loader.call(ctx, src)
    expect(res.toString().includes('I Like Skating.')).toBe(true)
  })
  test('esModule', () => {
    const ctx = {
      query: {
        esModule: false
      }
    }
    const src = 'I like skating.'
    const res = loader.call(ctx, src)
    expect(res.toString().includes('module.exports')).toBe(true)
  })
  test('outputPath & fileName', async () => {
    const ctx = {
      query: {
        outputPath: './out',
        fileName: 'file.txt'
      }
    }
    const src = 'I like skating.'
    await loader.call(ctx, src)
    const isExist = fs.existsSync(path.resolve(__dirname, '../', ctx.query.outputPath, ctx.query.fileName))
    expect(isExist).toBe(true)
  })
  test('processor', () => {
    const ctx = {
      query: {
        processor: (source, options) => {
          return source.replace(/like/, 'hate');
        }
      }
    }
    const src = 'I like skating.'
    const res = loader.call(ctx, src)
    expect(res.toString().includes('I hate skating.')).toBe(true)
  })
  test('empty', () => {
    const res = loader.call({}, '')
    expect(res).toBe('')
  })
  test('throw error', () => {
    const src = 123456
    const res = loader.call({}, src)
    expect(res.toString().includes('Error: TypeError')).toBe(true)
  })
})

afterAll(() => {
  fs.rmdirSync(path.resolve(__dirname, '../out'), {
    recursive: true,
    force: true
  })
});