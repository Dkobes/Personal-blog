// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.querySelector('back')

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
        noPostsMessage.textContent = 'No blog posts available. Please check back later.';
        postsContainer.appendChild(noPostsMessage);
    } else {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList () {
let renderBlogList =JSON.parse(localStorage.getItem("Blogs"))
if (!renderBlogList) {
    return displayBlogPosts; 
}
return renderBlogList; 
}
// TODO: Call the `renderBlogList` function
renderBlogList()

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

