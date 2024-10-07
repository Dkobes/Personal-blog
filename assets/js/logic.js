// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function changePageColor (color) {
  let colorChoices = {}
  if (color == "light") {
colorChoices.mode = 'light';
colorChoices.circle = '☀️'
  } else {
colorChoices.mode = 'dark';
colorChoices.circle = '🌒'
  }
  localStorage.setItem("colors",JSON.stringify(colorChoices))
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage () {
  let tutoringURL =JSON.parse(localStorage.getItem("Tutoring"))
  if (!tutoringURL) {
    return []
  }
  return tutoringURL;
}
//console.log(readLocalStorage())
// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage (recording) {
 let storeLocalStorage = readLocalStorage ()
 storeLocalStorage.push(recording)
 localStorage.setItem("Tutoring",JSON.stringify(storeLocalStorage))
} 
//storeLocalStorage(true)
//console.log(readLocalStorage())
// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

