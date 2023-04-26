/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ttt/custom"],
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
