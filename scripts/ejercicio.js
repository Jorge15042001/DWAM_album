// const ejecutarCodigo = () => {
//   alert("Hola, mundo");
// }
//
// ejecutarCodigo();
//



const elementoTitulo1 = document.getElementById('titulo1');
elementoTitulo1.innerText = "Album de fotos";

const elementsTextMuted = document.getElementsByClassName('text-muted');
for (let element of elementsTextMuted) {
  element.innerHTML = '<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'
}

const pTags = document.getElementsByTagName('p');
for (let pTag of pTags) {
  pTag.className = 'd-none';
}


/*
  ******************************************************************
  * Reto
  ***************************************************************** 
  */

const data = [
  {url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'camino'}, 
  {url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'energia'}, 
  {url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'papá'},
  {url: 'https://images.unsplash.com/photo-1653578705644-3672f965f009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'lago'},
  {url: 'https://images.unsplash.com/photo-1653242816429-fd9393b49bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'mesa'},
  {url: 'https://images.unsplash.com/photo-1653874403269-f4f0dba02f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'chica'},
  {url: 'https://images.unsplash.com/photo-1653904780118-96d8b4b1eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'globo'},
  {url: 'https://images.unsplash.com/photo-1653917215257-40db75a62dc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'montaña'},
  {url: 'https://images.unsplash.com/photo-1653919523364-1e7e221d2917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'moto'},
];
const svgs = document.querySelectorAll('.card svg');
let index = 0;
for (let svg of svgs) {
  const imgTag = document.createElement('img');
  imgTag.className = svg.className;
  imgTag.setAttribute('width', svg.getAttribute('width'));
  imgTag.setAttribute('height', svg.getAttribute('height'));
  imgTag.setAttribute('src', data[index].url)
  imgTag.setAttribute('alt', data[index].alt)

  svg.replaceWith(imgTag);

  index++;
}
