import React from "react";

const ListaProdutos = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch(`http://ranekapi.origamid.dev/json/api/produto`)
      .then((r) => r.json())
      .then((json) => setDados(json));
    console.log(dados);
  }, [dados]);
  return (
    <div>
      {dados && (
        <div>
          {dados.map((produtos) => (
            <div key={produtos.id}>{produtos.descricao}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaProdutos;
