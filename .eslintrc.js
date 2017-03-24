// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions 箭头函数用小括号括起来
    'arrow-parens': 0,
    // allow async-await 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // allow debugger during development 在开发过程中允许调试器
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //配置所有引号必须为单引号
    'quotes': [1, "single"],
    //缩进风格
    'indent':0,
  //对象字面量中冒号的前后空格 比如可以使用v-header
    'key-spacing': [0, { "beforeColon": false, "afterColon": true }],
    "eqeqeq": "off", //off = 0
   'no-return-assign':0
    
  }
}
