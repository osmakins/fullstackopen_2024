import axios from 'axios'
const PORT = import.meta.env.VITE_PORT || location.port
const baseUrl = `${location.protocol}//${eval(import.meta.env.VITE_BASE_API_URL)}:${PORT}/api/persons`
//const baseUrl = 'http://localhost:3001/api/persons'
console.log(baseUrl)

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const remove = (id) =>{
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAll, create, update, remove }