let url = "https://a7d87f28ae35b7f4.mokky.dev"
let nam = document.querySelector(".name");
let volume = document.querySelector(".volume")
let picture = document.querySelector("img")



function getFact(){
    loader.style.display = "block"
    nam.textContent = ""
    fetch(url)
      .then((response) => response.json())
      .then((data) => (text.textContent = data.fact))
      .catch((error) => console.log(error))
      .finally(() => (loader.style.display = "none"))
}

// async function getRandomfact(){
//     loader.style.display = 'block';
//     text.textContent = '';
//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         text.textContent = data.fact;
//     } catch (error) {
//         console.log(error);
//     } finally {
//         loader.style.display = 'none';
//     }
// }