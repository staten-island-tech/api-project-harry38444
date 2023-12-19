const DOMSelectors = {
    column: document.querySelector(".column"),
}
    const URLs = `https://pokeapi.co/api/v2/berry?offset=20&limit=20`;
    async function getData(URLs) {
    try {
        const response = await fetch(URLs);
        if(response.status !=200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();

      
        function insertCards(arr){
            arr.forEach((data) => {
                console.log(data)
                DOMSelectors.column.insertAdjacentHTML(
                    "beforeend",
                    `<div class="card">
                        <h3 class = "name">${data.name}</h3>
                        <img src="${data.url}" class="img">

                    </div>`
                )
            });
        }

        insertCards(data.results)
        console.log(array)
    } catch (error) {
        console.log(error, "Uh Oh Sphagettios 💀");
        document.querySelector("h1").textContent = "Error 🤓🤓"
    }}
    getData(URLs);
    