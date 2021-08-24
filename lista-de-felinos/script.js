const FR = new FileReader();

const $html = document.querySelector("html");
const $btnSwitch = document.querySelector("#switch");
const $labelSwitch = document.querySelector(".checkbox-label");
const $sectionListaFelinos = document.querySelector(".lista-felinos");
const $select = document.querySelector("select");
const $header = document.querySelector("header");
const $tituloNovoFelino = document.querySelector("#titulo-novo-felino");
const $imagemNovoFelino = document.querySelector("#imagem-novo-felino");
const $descricaoNovoFelino = document.querySelector("#descricao-novo-felino");
const $dataCriacaoNovoFelino = document.querySelector("#data-criacao-novo-felino");
const $modal = document.querySelector(".modal-novo-felino");
const $btnModal = document.querySelector(".btn-novo-felino");

$btnModal.addEventListener("click", ()=>{
    $modal.classList.toggle("modal-fechado");
})



function sair(){
  $modal.classList.toggle("modal-fechado");
}

$btnSwitch.addEventListener("change", ()=>{
  $html.classList.toggle("modo-noturno");
})


let listadeFelinos = localStorage.getItem("listaFelinos");

if(listadeFelinos ==null){
  listadeFelinos = [{
    title: 'O tigre',
    imgUrl: './imagens/tigre.jpg',
    description: 'O Tigre (Panthera tigris) é uma das espécies da subfamília dos panterinos (família Felidae) pertencente ao gênero Panthera. Só é encontrado no continente asiático; É um predador carnívoro e é a maior espécie de felino do mundo, junto com o leão, podendo ambos atingir um tamanho comparável ao dos maiores fósseis de felinos.',
    createdAt: '2021-06-01T23:12:11.837Z'
  },
  {
    title: 'O leão',
    imgUrl: './imagens/leao.jpg',
    description: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felídeos que é uma das cinco espécies do gênero Panthera. Leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África Subsaariana (com exceção das regiões de selva da costa atlântica e da Bacia do Congo) e em uma pequena área do noroeste da Índia.',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'O leopardo',
    imgUrl: './imagens/leopardo.jpg',
    description: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felídeos. Como três dos outros gatos do gênero Panthera: o leão, o tigre e a onça, eles se caracterizam por uma modificação no osso hióide que lhes permite rugir. É também conhecida como pantera marrom e, quando tem a pelagem totalmente escura, como pantera negra (melânica).',
    createdAt: '2021-05-05T23:12:11.837Z'
  },
  {
    title: 'A pantera negra',
    imgUrl: './imagens/pantera-negra.jpg',
    description: 'A pantera negra é uma variação negra (melanismo) de várias espécies de grandes felinos, principalmente o leopardo (Panthera pardus) e a onça pintada (Panthera onca). Mas deve-se ressaltar que não é uma espécie nova, nem mesmo uma subespécie, é simplesmente uma variação negra desses animais.',
    createdAt: '2021-04-09T23:12:11.837Z'
  },
  {
      title: 'O jaguar',
      imgUrl: './imagens/jaguar.jpg',
      description: 'O jaguar, jaguar ou yaguareté (Panthera onca) é um felino carnívoro da subfamília dos Panterinos e gênero Panthera. É a única das cinco espécies atuais desse gênero encontradas na América. É também o maior felino da América e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
      createdAt: '2021-05-18T23:12:11.837Z'
    },
    {
      title: 'O guepardo',
      imgUrl: './imagens/chita.jpg',
      description: 'A chita (Acinonyx jubatus) 1 é um membro atípico da família dos felídeos. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido, atingindo velocidade máxima de 115 km / h em corridas de até quatrocentos ou quinhentos metros.',
      createdAt: '2021-05-22T23:12:11.837Z'
    }
  ]
  localStorage.setItem("listaFelinos", JSON.stringify(listadeFelinos));
} else {
  listadeFelinos = JSON.parse(localStorage.getItem("listaFelinos"))
}


function adicionarFelino(){
   
  if (/*($imagemNovoFelino.value.endsWith('.jpg') || $imagemNovoFelino.value.endsWith('.png')) &&*/$tituloNovoFelino.value != '' && $descricaoNovoFelino.value != '' && $dataCriacaoNovoFelino.value != '') {

    let dadosNovoFelino =
      {
        title: $tituloNovoFelino.value,
        imgUrl: $imagemNovoFelino.value,
        description: $descricaoNovoFelino.value,
        createdAt: $dataCriacaoNovoFelino.value,
      }
    listadeFelinos.push(dadosNovoFelino);
    localStorage.setItem("listaFelinos", JSON.stringify(listadeFelinos));
    location.href = './index.html';
  }else{
    alert("Verifique se a URL inserida é válida (.png ou .jpg) e se todos os campos estão preenchidos.")
  }
}

let storageListaFelinos = JSON.parse(localStorage.getItem("listaFelinos"));

for(let i=0;i<storageListaFelinos.length;i++){
  $sectionListaFelinos.insertAdjacentHTML('beforeend', 
  `
  <div class='div-felino' id='felino-${i+1}'>
      <h2>${storageListaFelinos[i].title}</h2>
      <img class='imagem-felino' src="${storageListaFelinos[i].imgUrl}" alt="Imagem: ${storageListaFelinos[i].title}">
      <div class='div-descricao-felino'>
          <p class='paragrafo-felino'><strong>DESCRIÇÃO:</strong> ${storageListaFelinos[i].description}</p>
      </div>
      <p class='paragrafo-data-criacao'><strong>Criado em: ${storageListaFelinos[i].createdAt.slice(0,10)}</strong></p>
  </div>
  `
  )
  $select.insertAdjacentHTML("beforeend", 
  `
      <option value="#felino-${i+1}">
      
      ${i + 1} - ${storageListaFelinos[i].title.slice(2).toUpperCase()}</option>
  `
  )
  }



