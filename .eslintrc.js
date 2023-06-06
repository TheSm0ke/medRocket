module.exports = {
  extends: ["airbnb-typescript-prettier"],
  rules: {
    "import/no-anonymous-default-export": "off",
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-empty-function": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    camelcase: "off",
    "import/no-extraneous-dependencies": "off",
    "import/order": "off",
    "no-underscore-dangle": "off",
    "react/require-default-props": "off",
    // TODO enable later
    "no-console": "off",
    "react/jsx-no-bind": "off",
    "no-unused-expressions": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "no-lonely-if": "off",
    "react/no-unused-prop-types": "off",
    "react/no-array-index-key": "off",
    "no-restricted-syntax": "off",
    "react/destructuring-assignment": "off",
    "consistent-return": "off",
    "@typescript-eslint/no-var-requires": "off",
    // TODO important to enable
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-return-assign": "off",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "no-param-reassign": "off",
    "react/button-has-type": "off",
    "import/no-cycle": "off",
    // TODO A11y
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-autofocus": "off",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};