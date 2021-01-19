import axios from 'axios'


export async function getAll() {
    const { data } = await axios.get(`http://144.76.13.213:16079/posts`)
    return data
}

export async function getOne(id) {
    const { data } = await axios.get(`http://144.76.13.213:16079/posts/${id}`)
    return data
}

export async function save(payload) {
    const { data } = await axios.post('http://144.76.13.213:16079/posts', payload)
    return data
}
