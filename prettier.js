module.exports = {
  // 使用 4 个空格缩进
  tabWidth: 4,
  // 使用单引号
  singleQuote: true,
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 换行符使用 lf 结尾是 \n \r \n\r auto
  endOfLine: "auto",
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: "ignore",
  // 末尾不需要逗号 'none'
  trailingComma: "none",
  //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  arrowParens: "avoid",
  // 缩进使用tab，不使用空格
  useTabs: true,
  // 行尾需要有分号
  semi: false,
  // 一行最多 200 字符 超过最大值换行
  printWidth: 200,
  // 不缩进vue文件script和style标签
  vueIndentScriptAndStyle: false,
  // 在Html，Vue，JSX中是否强制每条属性占用一行
  singleAttributePerLine: false,
  // jsx中使用单引号 否
  jsxSingleQuote: false,
};
