// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  body.classList.add(currentTheme);
  toggleButton.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
} else {
  body.classList.add('light');
  toggleButton.textContent = '☀️';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  if (body.classList.contains('dark')) {
    toggleButton.textContent = '🌙';
  } else {
    toggleButton.textContent = '☀️';
  }
})

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
