const DOMSelectors = {
    column: document.querySelector(".column"),
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

async function getData(URL) {
try {
    // requesting a response REST API's
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
    getData(URL);