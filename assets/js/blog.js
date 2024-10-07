// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM
function () {}
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPosts () {

}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
let renderBlogList =JSON.parse(localStorage.getItem("Blogs"))
if (!renderBlogList) {
    return noBlogPosts; 
}
return renderBlogList; 
}
// TODO: Call the `renderBlogList` function
renderBlogList() {

}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
