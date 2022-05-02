//variável que recebe  requisição
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

//variavel que recebe o ID do botão para interagir com a imagem
const catBtn = document.getElementById('change-cat');

//varivar que recebe o ID da imagem para interagir com o botão
const catImg = document.getElementById('cat');

//Função que carrefa as imagens ( usando try/catch)
const getCats = async () => {
    try {
        //variável que recebe  a função await e que recebe a promisse da requisição
        const dados = await fetch(BASE_URL);

        //variavel que recebe a promisse como string e converte para json
        const json = await dados.json();

        return json.webpurl;
    }
    catch(e) {
        console.log(e.message);
    }
    
};

//função que dá um await no campo da imagem
const loadImg = async () => {
catImg.src = await getCats();
}

//criação de listener no botão 
catBtn.addEventListener('click', loadImg);

//declaração do loadImg para que a página já inicie com uma imagem
loadImg();