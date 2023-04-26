/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "@ttt/custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
