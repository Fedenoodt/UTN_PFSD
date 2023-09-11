import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// La idea ahora sería hacer una validacion de elección entre tres productos, 
// la cual desencadene, que tal o cuál lista, se va a pre-cargar en 
// "detailsProduct()", para montar la imagen en la web.

let list;

const remera = ['Remera', 'https://malditopaparazzo.com.ar/wp-content/uploads/2021/05/REMERA-NEGRA-halcon-milenario.jpeg', 'AD7235TZ', 'Remera talla L de hombre.', '$250', 672];
const celular = ['Celular', 'https://th.bing.com/th/id/OIP.5IJeb84Ph-MQNbpm8PUmngHaHa?pid=ImgDet&rs=1', 'LC28794TT', 'Nokia X2-01. Excelente teléfono de bajo costo. Ya no soporta Whatsapp, pero es un veterano de muchas guerras.', '$750', 27];
const termo = ['Termo', 'https://th.bing.com/th/id/OIP.JE8a1zp0WPKbfNtLzf-yXgHaHa?pid=ImgDet&rs=1', 'UD4852WQ', 'Termo verde Stanley 1 litro, buena calidad.', '$526', 263];

function validation (parameter) {
  if (parameter == 0) {
    return list = remera;
  }
  else if (parameter == 1) {
    return list = celular;
  }
  else if (parameter == 2) {
    return list = termo;
  }
}
list = validation(0)

const name = list[0]
const image = list[1]
const sku = list[2]
const description = list[3]
const price = list[4]
const available = list[5]

console.log('name', name)
console.log('image', image)
console.log('sku', sku)
console.log('description', description)
console.log('price', price)
console.log('available', available)

function caller(parameter) {
  return <div className='nameProductBox'>
    <h1>{parameter}</h1>
  </div>;
}
console.log('caller', caller(name))

function productBox(parameter) {
  return <div className='productBox'>
    <h3>{parameter}</h3>
  </div>;
}

function back(parameter) {
  return <a href="" onClick={{parameter}}><div className='productBox'>
    <h3>Volver</h3>
  </div></a>;
}

function productIMG(parameter) {
  return <div className='productIMG'>
    <img src={parameter} alt="imgProduct" />
  </div>;
}

// function detailsProduct() {
//   let restOfDetails = [];
//   name(list[0])
//   for (let i = 3; i < list.lemgth; i++) {
//     console.log('analizando...')
//     productBox(list[i])
//     console.log('convirtiendo...')
//     console.log(list[i])
//     console.log(i)
//     restOfDetails.push(list[i])
//     console.log('lanzando...')
//     console.log('ROD:', restOfDetails)
//   }
//   productIMG(list[1])
//   productBox(`Índice del producto: ${list[2]}`)
// }

function detailsProduct() {
  for (let i=3; i < list.lemgth; i++) {
    productBox(list[i])
  }
}

const product = [caller(name), productIMG(image), productBox(price), productBox(description), productBox(`Cantidad disponible: ${available} unidades.`), productBox(`ID del producto: ${sku}.`), back()];

function App() {

  return (
    product
    )
}

export default App