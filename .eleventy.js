const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = config => {
    
    // copy images src folder to  build
    config.addPassthroughCopy('src/images');
    config.addPassthroughCopy('src/fonts');
    config.addPlugin(eleventyNavigationPlugin);
    config.setTemplateFormats([ "html", "liquid", "njk" ]);
    return {

        // 11ty input and output
        dir: {
            input: 'src',
            output: 'build'
        }

    };

};