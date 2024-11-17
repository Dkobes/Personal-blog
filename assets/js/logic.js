// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;

// Toggle functionality
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Toggle the dark-mode class

    // Update the icon based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌙'; // Change to moon icon
        localStorage.setItem('theme', 'dark'); // Save preference
    } else {
        toggleButton.textContent = '☀️'; // Change back to sun icon
        localStorage.setItem('theme', 'light'); // Save preference
    }
});

// Load the theme from local storage on page load
window.onload = function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add('dark-mode'); // Apply dark mode
        toggleButton.textContent = '🌙'; // Set icon to moon
    } else {
        body.classList.remove('dark-mode');
        toggleButton.textContent = '☀️'; // Set icon to sun
    }
};
// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(key, value) {
  const jsonString = JSON.stringify(value);
  localStorage.setItem(key, jsonString);
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};