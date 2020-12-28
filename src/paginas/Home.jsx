import React from 'react'
import ListaPosts from '../components/ListaPosts'


const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <ul className="lista-categorias container flex">
      {
        
      }
       </ul>
      <ul className="lista-categorias container flex">
            <li className="lista-categorias__categoria lista-categorias__categoria--bemestar">Bem-estar</li>
            <li className="lista-categorias__categoria lista-categorias__categoria--comportamento">Comportamento</li>
        </ul>
      <ListaPosts url={'/posts'} />
      
    </main>

  )

}

export default Home
