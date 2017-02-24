module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // 指定腳本的運行環境
  // 每種環境都有一組特定的預定義全局變量
  env: {
    browser: true,
    // 啟用 jQuery 全局變量。
    jquery: true   
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 啟用的規則及各自的錯誤級別
  // 0: 關閉規則, 1: 開啟規則[warn], 2: 開啟規則[error]-程序會退出
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // modify by chris
    'semi': 0,
    'indent': 0,
    'spaceBeforeFunctionParen': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'spaced-comment': 0,
    'padded-blocks': 0,
    'no-trailing-spaces': 0,
    'comma-dangle': 1
  },
  // 當訪問未定義的變量時，no-undef 規則將發出警告
  // 因此需定義腳本在執行期間訪問的額外的全局變量
  // true 允許變量被重寫, false 不允許被重寫
  globals: {
    "_": true,
    "toastr": true
  }
}
