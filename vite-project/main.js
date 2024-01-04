window.addEventListener('DOMContentLoaded', (event) => {
    let currentPage = 1;
    const DOMSelectors = {
        column: document.querySelector(".column"),
        nextButton: document.querySelector(".next-button"),
        previousButton: document.querySelector(".previous-button")
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
                <img src="${data.imageUrl}" class="img">
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
    insertCards(data.data)
    console.log(data)
    document.querySelector("h1").textContent = data.content;
} catch (error) {
    console.log(error, "Error. No page found, please wait a bit before trying again. If you tried to click previous page, there might have been no page before it. Please note that there are not an infinite amount of pages.");
    document.querySelector("h1").textContent = "Error. No page found, please wait a bit before trying again. If you tried to click previous page, there might have been no page before it. Please note that there are not an infinite amount of pages."
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
});
