<div align="center">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200" src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
</div>
<br/>

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![cover][cover]][cover-url]
[![size][size]][size-url]

# capitalize-loader

A capitalize loader for webpack. Just capitalize the source content.

> i like skating. >>> I Like Skating.

## Getting Started

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

[npm]: https://img.shields.io/badge/npm-v5.0.0-blue
[npm-url]: https://npmjs.com/package/capitalize-loader
[node]: https://img.shields.io/node/v/capitalize-loader.svg
[node-url]: https://nodejs.org
[cover]: https://codecov.io/gh/qinhua/capitalize-loader/branch/main/graph/badge.svg?token=KSB3Z41HLW
[cover-url]: https://codecov.io/gh/qinhua/capitalize-loader
[size]: https://packagephobia.now.sh/badge?p=capitalize-loader
[size-url]: https://packagephobia.now.sh/result?p=capitalize-loader
