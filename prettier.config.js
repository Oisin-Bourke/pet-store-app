module.exports = {
    semi: true,
    trailingComma: 'all',
    singleQuote: true,
    printWidth: 80,
    tabWidth: 2,
    jsxSingleQuote: false,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    useTabs: false,
    endOfLine: 'auto',
    overrides: [
      {
        files: '*.ts',
        options: {
          parser: 'typescript',
        },
      },
      {
        files: '*.tsx',
        options: {
          parser: 'typescript',
        },
      },
    ],
  };
  