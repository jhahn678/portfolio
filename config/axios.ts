import Axios from 'axios'

Axios.defaults.baseURL = process.env.CONTENTFUL_GRAPH_URL

export default Axios