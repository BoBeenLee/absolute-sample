### Webpack
- webpack.config.js 설정 추가.
```
resolve: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
}
```
- src/pages/Layout.js Header 임포트된걸 볼 수 있다.

### Reference
- https://blog.andrewray.me/autocomplete-es-modules-webpack-vscode/
