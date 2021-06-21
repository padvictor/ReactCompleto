import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/`)
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  function limpaDados() {
    setDados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limpaDados }}>
      {children}
      <button onClick={limpaDados}>Limpar</button>
    </GlobalContext.Provider>
  );
};
