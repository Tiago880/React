import React from "react";

const App = () => {
  // return ( 
  //   <>
  //   <label htmlFor="nome">Nome</label>
  //   <input type="text" id="nome"/>
  //  </>
  // );

  const titulo = <h1>Esse é um titulo</h1>;
  const random = Math.random();
  const ativo = false;

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };



  return  (
  <>
     {titulo}
     <p style= {estiloP}>Estilização</p>
    <p className={ativo ? "ativo" : "inativo"}>{(random * 1000) / 500}</p>
  </>
  );
};

export default App;
