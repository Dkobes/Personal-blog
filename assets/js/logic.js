// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');
const body = document.body;

function applyTheme(theme) {
  body.classList.remove('light','dark');
  body.classList.add(theme);
  toggleButton.textContent = theme === 'dark' ? '🌙' : '☀️';
}

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  applyTheme(currentTheme); //Apply saved theme
} else {
  applyTheme('light'); //Default to light mode
}

toggleButton.addEventListener('click', () => {
  const newTheme = body.classList.contains('dark') ? 'light' : 'dark'; //Determine new theme
  applyTheme(newTheme);

  localStorage.setItem('theme', newTheme);
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
