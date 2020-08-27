module.exports = function (api) {
  api.cache(true)

  const presets = [`next/babel`]
  const plugins = [
    [
      `styled-components`,
      {
        ssr: true,
      },
    ],
    [
      `@babel/plugin-proposal-decorators`,
      {
        legacy: true,
      },
    ],
    [
      `@babel/plugin-proposal-class-properties`,
      {
        loose: true,
      },
    ],
    `macros`,
  ]

  return {
    presets,
    plugins,
  }
}
