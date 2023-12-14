const DOMSelectors = {
    column: document.querySelector(".column"),
}
    const URLs = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
    async function getData(URLs) {
    try {
        const response = await fetch(URLs);
        if(response.status !=200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
     // data.data.forEach((data)=> console.log(data.data.name));
     // data.data.forEach((data)=> console.log(data.data.card_images.image_url))
     // data.data.forEach((data)=> console.log(data.data.card_prices.tcgplayer_price))
     //   document.querySelector("h1").textContent = data;
      
        function insertCards(arr){
            arr.forEach((data) => {
                DOMSelectors.column.insertAdjacentHTML(
                    "beforeend",
                    `<div class="card">
                        <h3 class = "name">${data.name}</h3>
                        <img src="${data.card_images.image_url}" class="img">
                        <h4>Price: ${data.card_prices.tcgplayer_price}</h4> 
                    </div>`
                )
            });
        }
        
        insertCards(data.data)
        console.log(array)
    } catch (error) {
        console.log(error, "Uh Oh Sphagettios 💀");
        document.querySelector("h1").textContent = "Error 🤓🤓"
    }}
    getData(URLs);