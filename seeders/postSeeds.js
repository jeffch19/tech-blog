const { Post } = require('../models');

const postData = [
{
    title: "Model",
    content: `The HTML is the "skeleton" of bedrock content. Text that communicates information to the reader.`,
    userId: 1
},
{
    title: "View",
    content: `The CSS adds visual style to the content. It is the "skin" that we use to flesh out our skeleton and give it a particular look. We can swap in different skins via CSS without altering the original content in any way. They are relatively, but not completely, independent.`,
    userId: 2
},
{
    title: "Controller",
    content: `The browser is responsible for combining and rendering the CSS and HTML into a set of final, manipulatible pixels on the screen. It gathers input from the user and marshals it to any JavaScript code necessary for the page to function. But here, too, we have flexibility: we can plug in a different brower and get comparable results. Some browsers might render it faster, or with more fidelity, or with more bells and whistles. `,
    userId: 3
},

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;