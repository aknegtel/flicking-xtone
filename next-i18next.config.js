const path = require("path");

module.exports = {
  i18n: {
    locales: ["es", "en", "fr"],
    defaultLocale: "es",
  },
  localePath: path.resolve("./locales"),
};
