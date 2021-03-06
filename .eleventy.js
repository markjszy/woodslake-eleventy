module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/css");

    return {
        passThroughFileCopy: true,
        dir: {
            input: "src",
            output: "dist"
        }
    }
  };