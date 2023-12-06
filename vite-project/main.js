const URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Decode%20Talker`;
async function getData(URLs) {
    const response = await fetch(URLs);
    const data = await response.json();
    document.querySelector("img").src = data.image;
} 
    getData(URL); 




