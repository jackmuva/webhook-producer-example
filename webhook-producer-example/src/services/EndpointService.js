import StandardApi from "../util/StandardApi.js";

class EndpointService extends StandardApi{
    getEndpoint(){
        return this.getWithAuth('/endpoint').then(response => response.json());
    }

    postEndpoint(endpoint){
        return this.postWithAuth('/endpoint', endpoint).then(response => response.json());
    }

    putEndpoint(endpoint){
        return this.putWithAuth('/endpoint', endpoint).then(response => response.json());
    }

    deleteEndpoint(endpoint){
        return this.deleteWithAuth('/endpoint', endpoint).then(response => response.json());
    }
}

export default new EndpointService();