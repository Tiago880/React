// *-------Aula 13 módulo 2 Propriedades-------

// Assim como uma função pode receber argumentos, 
// podemos também passar argumentos aos componentes
// Esses são conhecidos como propriedades
// ou props.

// ----- Podemos usar o props fazendo a desestruturação ----
// import React from 'react';
// const Titulo = ({cor,texto})=>{
//   return <h1 style = {{color:cor}}>{texto}</h1>
// };

// const App =() => {
// return(
//   <div>
//     <Titulo cor = "red" texto = "Meu titulo 1"/>
//     <Titulo cor ="blue" texto = "Meu titulo 2"/>

//   </div>
// );
// };
// export default App;
// * -----------------------------------------------------*

// *-------- Uso do props sem desestruturação --------*
// import React from 'react';
// const Titulo = (props)=>{
//   return <h1 style = {{color: props.cor}}>{props.texto}</h1>
// };

// const App =() => {
// return(
//   <div>
//     <Titulo cor = "red" texto = "Meu titulo 1"/>
//     <Titulo cor ="blue" texto = "Meu titulo 2"/>

//   </div>
// );
// };
// export default App;

// * -----------------------------------------------*



// * --------------Uso do children---------------------------------*

//  Se utilizarmos o componente abrindo e fechando o mesmo,
//  o conteúdo interno deste será acessado através da propriedade
//  children

// import React from 'react';
// const Titulo = ({cor,texto, children})=>{
//   return <h1 style = {{color:cor}}>{texto},{children}</h1>
// };

// const App =() => {
// return(
//   <div>
    
//     <Titulo cor = "red" texto = "Meu titulo 1"> 
//      Isso é um children 
//      <p>Testes children</p>
//     </Titulo>

//     <Titulo cor ="blue" texto = "Meu titulo 2"/>

//   </div>
// );
// };
// export default App;


// * --------- Uso do Rest e Spread ----------------*

// Usamos o rest e spread quando não sabemos todas as 
// propriedades que um componente pode receber

import React from 'react'
import Form from './form/Form';
const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App

// *-------------------------------------------------*