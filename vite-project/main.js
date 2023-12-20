const DOMSelectors = {
    column: document.querySelector(".column"),
}
    const URLs = `https://api.disneyapi.dev/character`;
    async function getData(URLs) {
    try {
        const response = await fetch(URLs);
        if(response.status !=200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();

      
        function insertCards(arr){
            arr.info.forEach((data) => {
                console.log(data)
                DOMSelectors.column.insertAdjacentHTML(
                    "beforeend",
                    `<div class="card">
                        <h3 class = "name">${data.name}</h3>
                        <img src="${data.imageUrl}" class="img">

                    </div>`
                )
            });
        }

        insertCards(data)
        console.log(data)
    } catch (error) {
        console.log(error, "Uh Oh Sphagettios 💀");
        document.querySelector("h1").textContent = "Error 🤓🤓"
    }}
    getData(URLs);
    