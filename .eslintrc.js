module.exports = {
  'extends': [
    'taro/react'
  ],
  "rules": {
      "no-unused-vars": [
          "error",
          {
              "varsIgnorePattern": "Taro"
          }
      ],
      "react/jsx-filename-extension": [
          1,
          {
              "extensions": [
                  ".js",
                  ".jsx",
                  ".tsx"
              ]
          }
      ]
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
      "@typescript-eslint"
  ],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "useJSXTextNode": true,
      "project": "./tsconfig.json"
  }
}
