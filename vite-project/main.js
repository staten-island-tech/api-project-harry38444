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
        <h2 class = "name">${data.name}</h2>
        <img src="${data.imageUrl}" class="img" alt="${data.name}">
    </div>`
        )
    });
    } 
    let currentPage = 1;
    function error(){
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<h1>Server might be down. Check https://status.disneyapi.dev/ for more info.</h1>`)
    }
    function error2(){
        DOMSelectors.column.insertAdjacentHTML(
            "beforeend",
            `<h1>No results 🤓🤓🤓</h1>`)
    }
    async function getData(page) {
        const URL = `https://api.disneyapi.dev/character?page=${page}`;
        
        const response = await fetch(URL);
        if(response.status !=200) {
            throw new Error (response.statusText);
        }
        const data = await response.json();
        if (data.data.length === 0) {
            error();
            console.log("Server might be down. Check https://status.disneyapi.dev/ for more info.");
        } else {
            insertCards(data.data);
        }
        if (currentPage === 1) {
            DOMSelectors.previousButton.disabled = true;
        } else {
            DOMSelectors.previousButton.disabled = false;
        }
        if (currentPage === 149) {
            DOMSelectors.nextButton.disabled = true;
        } else {
            DOMSelectors.nextButton.disabled = false;
        }
        console.log(data)
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

        const response = await fetch(URL);
    const result = await response.json();
    const data = result.data; 
    console.log(data)
    let input = DOMSelectors.input.value.toLowerCase();
    let arr = data.filter((data) => data.name.toLowerCase().includes(input));
    clearfields();
    if (arr.length > 0) {
        insertCards(arr);
    } else {
        error2();
        console.log("No results 🤓🤓🤓");
    }
    });
    }
    search(currentPage);
