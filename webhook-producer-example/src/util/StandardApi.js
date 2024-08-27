import config from "../config.js";
const apiUrl = config.apiGatewayUrl;

export default class StandardApi {

    getWithAuth(url){
        return fetch(apiUrl.concat(url), {
            method: 'GET',
            headers:{
                'accessToken': sessionStorage.accessToken.toString()
            }
        });
    }

    deleteWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'DELETE',
            headers:{
                'accessToken': sessionStorage.accessToken.toString()
            },
            item: JSON.stringify(payload)
        });
    }

    postWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'accessToken': sessionStorage.accessToken.toString()
            },
            item: JSON.stringify(payload)
        });
    }

    putWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'PUT',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'accessToken': sessionStorage.accessToken.toString()
            },
            item: JSON.stringify(payload)
        });
    }
}