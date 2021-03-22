//import React from "react";

// * ---------------Aula 09 JSX do módulo 02------------------------* 
//Essa eh a parte do código referente a 
// aula 09 JSX do módulo 02 - React para iniciantes
//
// const App = () => {
//   const livros = [
//     {nome: 'A cabana', ano: 1996},
//     {nome: 'O imitador', ano: 1998},
//     {nome: 'Caminhando e cantando', ano: 2021},
//   ];
//   return (
//     <ul>
//       {livros.filter(({ano})=>ano >= 1998)
//       .map(({nome, ano}) => (
//       <li key={nome}>
//         {nome},{ano}
//       </li>
//       ))}
//     </ul>
//   );  
// };
//*------------------------------------------------------------*

// // *----------------Aula 10 JSX do módulo 02----------------------*
// const produtos = [
//   {
//   id: 1,
//   nome:'Smartphone',
//   preco: 'R$ 2000',
//   cores: ['#29d8d5' , '#252a34' , '#fc3766'],
// },
// {  
//   id: 2,
//   nome: 'Notebook',
//   preco: 'R$ 3000',
//   cores: ['#ffd045','#d4394b' , '#f37c59'],
// },
// { id: 3,
//   nome:'Tablet',
//   preco:'R$ 1500',
//   cores:['#365069', '#47c1c8' , '#f95786'],
// },
// ];

// const App = () => {
//   const dados = produtos.filter(({preco})=> Number(preco.replace("R$",""))>1500);
//   console.log(dados);
//   return <section>
//     {dados.map(({id, nome , preco , cores}) =>(
//       <div key={id}>
//         <h1>{nome}</h1>
//         <p>Preço:{preco}</p>
//         <ul>{cores.map(cor => (
//           <li style={{backgroundColor: cor,color: 'white'}} key={cor}>{cor}</li>
//         ))}</ul>
//       </div>
//     ))}
  
//   </section>;
// };
// export default App;

// -----------Aula 11 JSX do módulo 02 ------------------

import React from 'react';

const App = () => {
function handleClick(event){
  console.log(event.target);
}
return <button onClick={(event)=> alert(event.target.innerText)}>Button</button>

};
export default App;
