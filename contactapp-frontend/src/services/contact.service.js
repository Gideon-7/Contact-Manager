import httpClient from '../http-common'

const getAll = () => {
    return httpClient.get('/contacts')
}

const create = (data) => {
    return httpClient.post("/contacts", data);
}

const get = id => {
    return httpClient.get(`/contacts/${id}`);
}

const update = (data) => {
    return httpClient.put('/contacts', data);
}

const remove = id => {
    return httpClient.delete(`/contacts/${id}`);
}
export default {getAll, create, get, update, remove};