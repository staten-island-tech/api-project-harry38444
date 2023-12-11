
    const URLs = `https://db.ygoprodeck.com/api/v7/cardinfo.php`;
    async function getData(URLs) {
    try {
        const response = await fetch(URLs);
        if(response.status !=200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
      data.data.forEach((data)=> console.log(data.name));
        document.querySelector("h1").textContent = data;
        const array = data.name
        console.log(array)
    } catch (error) {
        console.log(error, "Uh Oh Sphagettios 💀");
        document.querySelector("h1").textContent = "Error 🤓🤓"
    }
    }
    getData(URLs);