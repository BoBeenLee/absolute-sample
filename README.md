### React Native
- .babelrc 설정한다.
```
  "plugins": [
        "transform-react-jsx-source",
        [
          "module-resolver",
          {
            "alias": {
              "~/*": "./src"
            }
          }
        ]
      ]
```
- src/screens/Layout.tsx Header 임포트에 적용된걸 볼 수 있다.


### Reference
- https://github.com/tleunen/babel-plugin-module-resolver
