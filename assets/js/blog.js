// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function createAndAppendBlogPost(post) {
    const postsContainer = document.getElementById('postsContainer');
    
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    postsContainer.appendChild(postElement);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function displayBlogPosts(posts) {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = '';
    if (posts.length === 0) {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = 'No blog posts yet...';
        postsContainer.appendChild(noPostsMessage);
    } else {
        posts.forEach(post => createAndAppendBlogPost(post));
    }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const renderBlogList = JSON.parse(localStorage.getItem("Blogs")) || [];
    displayBlogPosts(renderBlogList); // Call the display function with the blog posts
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
let redirectURL = '';

const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

backButton.addEventListener('click', function() {
        window.location.href = 'index.html'; // Replace with your desired relative or absolute URL
    });