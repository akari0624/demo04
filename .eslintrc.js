module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
        "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "jest"
  ],
  "rules": {
    "strict": 0,
    "comma-dangle": 0,
    "react/jsx-uses-vars": 1,
    "react/display-name": 1,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/forbid-elements": "off",
    "react/prop-types": 0, //防止在React元件定義中丟失props驗證
    "no-unused-vars": "warn",
    "no-console": 1,
    "no-unexpected-multiline": "warn",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error"
  },
};
