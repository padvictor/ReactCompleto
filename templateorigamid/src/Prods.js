import React from 'react'

const Prods = ({url, dados}) => {
  if (url !== '/') { 
  return (
    <div>
      <h1 style={{color: "green"}}>Produtos</h1>
      {dados.map(({nome, propriedades}) => (
        <fieldset key={nome}>
          <ul>
            <h2>{nome}</h2>
            {propriedades.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </fieldset>
      ))}

    </div>
  )
} else {
  return null
}
}
export default Prods
