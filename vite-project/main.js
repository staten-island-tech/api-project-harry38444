window.addEventListener('DOMContentLoaded', (event) => {
    let currentPage = 1;

    const DOMSelectors = {
        column: document.querySelector(".column"),
        nextButton: document.querySelector(".next-button"),
    }

function insertCards(arr){
    arr.forEach((data) => {
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <h3 class = "name">${data.name}</h3>
                <img src="${data.imageUrl}" class="img">
 
            </div>`
        )
    });
}


    const URL = `https://api.disneyapi.dev/character`;

async function getData(page) {
    const URL = `https://api.disneyapi.dev/character?page=${page}`;

try {

    const response = await fetch(URL);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    insertCards(data.data)

    console.log(data)
    document.querySelector("h1").textContent = data.content;
} catch (error) {
    console.log(error, "Uh OH sphaghettios");
    document.querySelector("h1").textContent = "aVDnghj"
}
}
DOMSelectors.nextButton.addEventListener('click', () => {
    currentPage++;
    getData(currentPage);
});

getData(currentPage);
});