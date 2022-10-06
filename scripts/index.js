import View from './View.js';
import Client from './Client.js';

// All of your javascript should go here
// console.log("Hello from index.js");

const input = document.querySelector("input");
const save = document.querySelector(".btn-save");
const reset = document.querySelector(".btn-reset");

const newClient = new Client();
const newView = new View();

let movieArray = []


input.addEventListener("change", async()=> {
    
    if (input.value) {

        const data = await newClient.getMovieData(input.value);
        newView.displayMovieOnPage(data);
        movieArray.push(data);

    }
    
})

save.addEventListener("click", ()=> {
    
    localStorage.setItem("movieList", JSON.stringify(movieArray))
})

function loadMovies() {

    const localStorageItem = localStorage.getItem("movieList");
    const parsed = JSON.parse(localStorageItem);

    movieArray.push(...parsed)

    movieArray.forEach((item) => {
        newView.displayMovieOnPage(item);
    })
}

loadMovies()

reset.addEventListener("click", () =>{

    newView.removeDisplay();
    movieArray = [];


})