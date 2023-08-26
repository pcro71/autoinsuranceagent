module.exports = {
  // ... other webpack config settings ...

  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      url: require.resolve('url'),
      crypto: require.resolve("crypto-browserify"),
      querystring: require.resolve("querystring-es3"),
      path: require.resolve("path-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify")
    }
  }
}
