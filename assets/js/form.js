// TODO: Create a variable that selects the form element

const form = document.getElementById('landingForm');
const errorElement = document.getElementById('error'); 

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value 

    if (!username || !title || !content) {
        errorElement.textContent = "Please complete the form.";
        return;
    } 

    const blogPost = {
        username: username,
        title: title,
        content: content,
    }

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(blogPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    redirectPage('blog.html');
})

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your form handling logic here
    console.log('Form submitted!');
    // You can access form data using form.elements or new FormData(form)
}

// Add event listener for form submission
form.addEventListener('submit', handleFormSubmit);