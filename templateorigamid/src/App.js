import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProdutos from "./ListaProdutos";
import Header from "./Header";
import Contato from "./Contato";
import Produto from "./Produto";
// import { GlobalStorage } from "./GlobalStorage";
// import { GlobalContext } from "./GlobalStorage";

// const App = () => {

// const estilo1 = {
//   color: 'green',
// }

// // function calculosPreco(compras) {
// //   const precosSoma = compras.preco.replace('R$', '');
// // }

// // calculosPreco(luana.compras);

// const estilo2 = {
//   color: 'red',
// }

// const luana = {
//   cliente: 'Luana',
//   idade: 27,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//   ],
//   ativa: true,
// };

// const mario = {
//   cliente: 'Mario',
//   idade: 31,
//   compras: [
//     { nome: 'Notebook', preco: 'R$ 2500' },
//     { nome: 'Geladeira', preco: 'R$ 3000' },
//     { nome: 'Smartphone', preco: 'R$ 1500' },
//     { nome: 'Guitarra', preco: 'R$ 3500' },
//   ],
//   ativa: false,
// };

// const pessoa = luana;

// return (
//   <>
//   <p>Nome: {pessoa.cliente}</p>
//   <p>Idade: {pessoa.idade}</p>
//   <p >Situação: <span style={pessoa.ativa ? estilo1 : estilo2}>{pessoa.ativa ? 'ativa' : 'inativo'}</span></p>
//   <p>Total gasto:</p>
//   <p>Voce está gastando muito MACONHEIRO</p>
//   </>
// )

// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
// const produtos = [
//   {
//     id: 1,
//     nome: 'Smartphone',
//     preco: 'R$ 2000',
//     cores: ['#29d8d5', '#252a34', '#fc3766'],
//   },
//   {
//     id: 2,
//     nome: 'Notebook',
//     preco: 'R$ 3000',
//     cores: ['#ffd045', '#d4394b', '#f37c59'],
//   },
//   {
//     id: 3,
//     nome: 'Tablet',
//     preco: 'R$ 1500',
//     cores: ['#365069', '#47c1c8', '#f95786'],
//   },
// ];

// const App = () => {
// const dados = produtos.filter(({preco}) => Number(preco.replace('R$', "")) > 1500,);
//   return <section>
//   {dados.map(({id, nome, preco, cores}) => (
//     <div kay={id}>
//       <h1>{nome}</h1>
//       <p>Preço: {preco}</p>
//       <ul>{cores.map((cor) => (
//         <li style={{backgroundColor: cor, color: "white"}} key={cor}>
//           {cor}
//         </li>
//       ))}
//       </ul>
//     </div>
//   ))}
//   </section>;
// };

// };

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// const produtos = [
//   { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
//   { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
// ];
// const { pathname } = window.location;

// const App = () => {
//   return (
//     <div>
//       <ul>
//       <li><a id={ pathname } href="http://localhost:3000/">Home</a></li>
//       <li><a id={ pathname } href="http://localhost:3000/produtos">Produtos</a></li>
//       <Home url={pathname} />
//       <Prods url={pathname} dados={produtos}/>

//       </ul>
//     </div>
//   )
// };

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
// const btnProxima = document.querySelector('.proxima');
// const paragrafoPiada = document.querySelector('.tablet');

// function setTablet() {
//   fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
//   .then(r => r.json())
//   .then(tablet => {
//     paragrafoPiada.innerText = tablet.value;
//   })
// }

// btnProxima.addEventListener('click', setTablet);

// setTablet();

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

// const App = () => {
// const [dados, setDados] = React.useState(null);

// async function handleClick(event) {
//   const response = await fetch(
//     `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
//   );
//   const json = await response.json();
//   setDados(json);
// }

//   return (
//     <div>
//       <h1>Preferência:</h1>
//       <button>Notebook</button>
//       <button>Smartphone</button>
//     </div>
//   )
// };

// const App = () => {
//   return (
//     <div>
//       <GlobalStorage></GlobalStorage>
//     </div>
//   );
// };

// const App = () => {
//   const [form, setForm] = React.useState({
//     nome: "",
//     email: "",
//     senha: "",
//     cep: "",
//     rua: "",
//     numero: "",
//     bairro: "",
//     cidade: "",
//     estado: "",
//   });

//   const [dados, setDados] = React.useState("");
//   async function handleSubmit(event) {
//     event.preventDefault();
//     console.log(form);
//     const raw = await fetch("https://ranekapi.origamid.dev/json/api/usuario", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });
//     const recebe = await raw.json();
//     setDados(recebe);
//   }

//   function handleChange({ target }) {
//     const { id, value } = target;
//     setForm({ ...form, [id]: value });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="nome">Nome</label>
//       <input type="text" id="nome" value={form.nome} onChange={handleChange} />

//       <label htmlFor="email">Email</label>
//       <input
//         type="text"
//         id="email"
//         value={form.email}
//         onChange={handleChange}
//       />
//       <label htmlFor="senha">Senha</label>
//       <input
//         type="text"
//         id="senha"
//         value={form.senha}
//         onChange={handleChange}
//       />
//       <label htmlFor="cep">CEP</label>
//       <input type="text" id="cep" value={form.cep} onChange={handleChange} />
//       <label htmlFor="rua">Rua</label>
//       <input type="text" id="rua" value={form.rua} onChange={handleChange} />
//       <label htmlFor="numero">Número</label>
//       <input
//         type="text"
//         id="numero"
//         value={form.numero}
//         onChange={handleChange}
//       />
//       <label htmlFor="bairro">Bairro</label>
//       <input
//         type="text"
//         id="bairro"
//         value={form.bairro}
//         onChange={handleChange}
//       />
//       <label htmlFor="cidade">Cidade</label>
//       <input
//         type="text"
//         id="cidade"
//         value={form.cidade}
//         onChange={handleChange}
//       />
//       <label htmlFor="estado">Estado</label>
//       <input
//         type="text"
//         id="estado"
//         value={form.estado}
//         onChange={handleChange}
//       />
//       {dados && <p>Boa cachorro!</p>}
//       <button>Enviar</button>
//     </form>
//   );
// };
// const perguntas = [
//   {
//     pergunta: "Qual método é utilizado para criar componentes?",
//     options: [
//       "React.makeComponent()",
//       "React.createComponent()",
//       "React.createElement()",
//     ],
//     resposta: "React.createElement()",
//     id: "p1",
//   },
//   {
//     pergunta: "Como importamos um componente externo?",
//     options: [
//       'import Component from "./Component"',
//       'require("./Component")',
//       'import "./Component"',
//     ],
//     resposta: 'import Component from "./Component"',
//     id: "p2",
//   },
//   {
//     pergunta: "Qual hook não é nativo?",
//     options: ["useEffect()", "useFetch()", "useCallback()"],
//     resposta: "useFetch()",
//     id: "p3",
//   },
//   {
//     pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
//     options: ["set", "get", "use"],
//     resposta: "use",
//     id: "p4",
//   },
// ];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<ListaProdutos />} />
          <Route path="produto/id" element={<Produto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
