module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "Covid-19 Info";
        return args;
      })
  }
}