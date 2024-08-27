import config from "../config.js";
const apiUrl = config.apiGatewayUrl;

export default class StandardApi {

    getWithAuth(url){
        return fetch(apiUrl.concat(url), {
            method:'GET',
            headers:{
                'accesstoken': sessionStorage.accessToken.toString()
            },
        });
    }

    deleteWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'DELETE',
            headers:{
                'accesstoken': sessionStorage.accessToken.toString()
            },
            body: JSON.stringify(payload)
        });
    }

    postWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'accesstoken': sessionStorage.accessToken.toString()
            },
            body: JSON.stringify(payload)
        });
    }

    putWithAuth(url, payload){
        return fetch(apiUrl.concat(url), {
            method: 'PUT',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'accesstoken': sessionStorage.accessToken.toString()
            },
            body: JSON.stringify(payload)
        });
    }
}