import Axios from 'axios'

Axios.defaults.baseURL = process.env.CONTENTFUL_GRAPH_URL
Axios.defaults.headers.common = { "Authorization": `Bearer ${process.env.CONTENT_PREVIEW_ACCESS_TOKEN!}`}

export default Axios