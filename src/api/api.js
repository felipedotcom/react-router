import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})
//já joga o proprio axios já trata o erro404, trata no postjsx
export const busca = async (url, setDado) => {

  const resposta = await api.get(url)
  setDado(resposta.data)
  //proprio api dispara 500
  // Acho que o axios não tem resposta.ok
  // Depois a gente modifica isso para pegar os valores 2xx
  /* if (resposta.status === 200) {
    setDado(resposta.data) //conteudo da resposta
    return
  }

  if (resposta.status === 404) {//rota que nao existe
    throw new Error404()
  }
  
  throw new Error(resposta.body)//qualquer outro erro que rolar */

}
