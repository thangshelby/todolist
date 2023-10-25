import axios from 'axios'

const url ='https://api-gateway.fullstack.edu.vn/api/pro-courses'

export const fetchTodo= ()=>axios.get(url)

