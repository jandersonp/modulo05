import React from 'react';

/** Importando as routas da aplicação */
import Routes from './routes';

/** Estilos Globais */
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
