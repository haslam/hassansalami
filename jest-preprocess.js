const babelOptions = {
  preset: ["babel-preset-gatsby"],
}

module.exports = require("babel-jest").createTransformer(babelOptions);