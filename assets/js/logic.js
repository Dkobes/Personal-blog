// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;
const toggleSwitch = document.querySelector('.toggle-switch');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update the circle color based on the mode
    if (body.classList.contains('dark-mode')) {
        toggleSwitch.style.backgroundColor = 'black'; // Dark mode circle color
    } else {
        toggleSwitch.style.backgroundColor = 'white'; // Light mode circle color
    }
});
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
