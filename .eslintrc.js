module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "globals": {
    "document": false,
    "window": true
  },
  env: {
    jest: true
  },
  "rules": {
    "semi": 0,
    "strict": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-console": 0,
    "import/prefer-default-export": "off",
    "comma-dangle": ["error", {"functions": "ignore"}],
    "max-len": 0
  },
};
