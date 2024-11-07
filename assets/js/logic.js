// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;
const icon = document.getElementById('icon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('toggle');
  
 if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '🌙';
  } else {
    icon.textContent = '☀️';
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


//console.log(readLocalStorage())
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


//storeLocalStorage(true)
//console.log(readLocalStorage())
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
