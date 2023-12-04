const URL = `https://api.quotable.io/random`;
async function getData(URL) {
try {
    const response = await fetch(URL);
    if(response.status !=200) {
        throw new Error (response.statusText);
    }
    const data = await response.json();
    document.querySelector("h1").textContent = data.content;
} catch (error) {
    console.log(error, "Uh OH sphaghettios💀");
    document.querySelector("h1").textContent = "Error"
}}
    getData(URL);