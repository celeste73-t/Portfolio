import axios from 'axios'

const URL = "http://localhost:3000"

export async function getLanguage_Cards() {
    const response = await axios.get(`${URL}/languages`)

    if (response.status == 200) {
        return response.data
    } else {
        return
    }
}

export async function getLanguage_Card(id) {
    const response = await axios.get(`${URL}/languages/${id}`)

    if (response.status == 200) {
        return response.data
    } else {
        return
    }
}

export async function getMainPage() {
    const response = await axios.get(`${URL}/mainpage`)
    
    if (response.status == 200) {
        return response.data
    } else {
        return
    }
}