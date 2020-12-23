import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const busca = async (url, setDado) => {
  try {
    const resposta = await api.get(url)

    // Acho que o axios não tem resposta.ok
    // Depois a gente modifica isso para pegar os valores 2xx
    if (resposta.status === 200) {
      setDado(resposta.data)
      return
    }

    throw new Error(resposta.body)
  } catch (erro) {
    // Precisa ver como tratar o erro
    console.log(`Erro: ${erro}`)
  }
}
