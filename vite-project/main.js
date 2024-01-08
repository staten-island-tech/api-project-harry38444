window.addEventListener('DOMContentLoaded', (event) => {
    let currentPage = 1;
    const DOMSelectors = {
        column: document.querySelector(".column"),
        nextButton: document.querySelector(".next-button"),
        previousButton: document.querySelector(".previous-button"),
        search: document.querySelector('#search'),
        input: document.querySelector('#input'),
    }
    function clearfields(){
        DOMSelectors.column.innerHTML="";
    }
function insertCards(arr){
    arr.forEach((data) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${data.name}</h3>
                <img src="${data.imageUrl}" class="img" alt="${data.name} Picture">
            </div>`
        )
    });
}
const URL = `https://api.disneyapi.dev/character`
async function getData(page) {
    const URL = `https://api.disneyapi.dev/character?page=${page}`;
try {
    const response = await fetch(URL);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    if (data.data.length === 0) {
        DOMSelectors.nextButton.disabled = true;
        
    } else {
        DOMSelectors.nextButton.disabled = false;
    }
    if (currentPage === 1) {
        DOMSelectors.previousButton.disabled = true;
    } else {
        DOMSelectors.previousButton.disabled = false;
    }
    insertCards(data.data)
    console.log(data)
    document.querySelector("h1").textContent = data.content;
} catch (error) {
    console.log(error, "Server might be down. Check https://status.disneyapi.dev/ for more info.");
    document.querySelector("h1").textContent = "Server might be down. Check https://status.disneyapi.dev/ for more info."
}
}
DOMSelectors.nextButton.addEventListener('click', () => {
    currentPage++;
    clearfields();
    getData(currentPage);
});
DOMSelectors.previousButton.addEventListener('click', () => {
    currentPage--;
    clearfields();
    getData(currentPage);
});
getData(currentPage);

async function search(){

DOMSelectors.search.addEventListener('click', async function(event) {
event.preventDefault();
const URL = `https://api.disneyapi.dev/character?page=${currentPage}`;
try {
    const response = await fetch(URL);
const result = await response.json();
const data = result.data; 
console.log(data)
let input = DOMSelectors.input.value;
let arr = data.filter((data) => data.name.toLowerCase().includes(input));
clearfields();
if (arr.length > 0) {
    insertCards(arr);
    document.querySelector("h1").textContent = ""
} else {
    document.querySelector("h1").textContent = "No results 🤓🤓🤓";
}
    } catch (error) {
        console.log(error);
    }
});
}
search(currentPage);
});