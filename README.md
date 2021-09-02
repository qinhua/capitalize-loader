<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>

<h1 align="center">capitalize-loader</h1>

<p align="center">
  <a href="https://npmjs.com/package/capitalize-loader">
    <img alt="npm" src="https://img.shields.io/badge/npm-v5.0.0-blue" />
  </a>
  <a href="https://nodejs.org">
    <img alt="npm" src="https://img.shields.io/node/v/capitalize-loader.svg" />
  </a>
  <a href="https://codecov.io/gh/qinhua/capitalize-loader">
    <img alt="coverage" src="https://codecov.io/gh/qinhua/capitalize-loader/branch/main/graph/badge.svg?token=KSB3Z41HLW" />
  </a>
  <a href="https://packagephobia.now.sh/result?p=capitalize-loader">
    <img alt="size" src="https://packagephobia.now.sh/badge?p=capitalize-loader" />
  </a>
</p>

<p align="center">A capitalize loader for webpack. Just capitalize the source content.</p>


## Getting Started

> i like skating. &nbsp;>>>&nbsp; I Like Skating.

To begin, you'll need to install `capitalize-loader`:

```console
npm install capitalize-loader --save-dev
```

Then add the loader to your `webpack` config. For example:

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "capitalize-loader",
      },
    ],
  },
};
```

You can also provide some `options` for the loader. For example:

```js
{
    test: /\.txt$/,
    use: {
        loader: 'capitalize-loader',
        options: {
            regExp: /(^|\s+|\W)[a-z]{1}/g,
            outputPath: './dist',
            fileName: '[name]-[contenthash:5].[ext]',
            processor: (source, options) => {
                return source.replace(/raw/, 'short')
            }
        }
    }
}
```

And run `webpack` via your preferred method.

## Options

|      Name      |     Type     |       Default        | Description                           |
| :------------: | :----------: | :------------------: | ------------------------------------- |
|  **esModule**  | `{Boolean}`  |         true         | use ES module syntax, default as cjs  |
|   **regExp**   |  `{RegExp}`  | /(^\| \s+)[a-z]{1}/g | regExp for content parse              |
| **processor**  | `{Function}` |         null         | custom processor \| (source, options) |
| **outputPath** |  `{String}`  |          ./          | output path                           |
|  **fileName**  |  `{String}`  |         null         | output filename                       |

## License

[MIT](./LICENSE)
