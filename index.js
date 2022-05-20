const URL = 'https://api.thecatapi.com/v1/images/search'

// fetch(URL)
//     .then(res => res.json())
//     .then(data => {
//         const img = document.querySelector('img')
//         img.src = data[0].url
//      })

async function gatitosBonitos(){
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.querySelector('img')
    img.src = data[0].url
}
gatitosBonitos()
const botonDeGatitos = document.querySelector('button')
botonDeGatitos.onclick = gatitosBonitos;
