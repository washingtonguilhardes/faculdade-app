module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    "indent": 2,
    'prettier/prettier': [0],
    "quotes": [2, "single", { "avoidEscape": true }],
    semi: 0
  }
};
