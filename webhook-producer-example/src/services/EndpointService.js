import StandardApi from "../util/StandardApi.js";

class EndpointService extends StandardApi{
    getEndpoint(){
        return this.getWithAuth('/endpoint2').then(response => response.json());
    }

    postEndpoint(endpoint){
        return this.postWithAuth('/endpoint2', endpoint).then(response => response.json());
    }

    putEndpoint(endpoint){
        return this.putWithAuth('/endpoint2', endpoint).then(response => response.json());
    }

    deleteEndpoint(endpoint){
        return this.deleteWithAuth('/endpoint2', endpoint).then(response => response.json());
    }
}

export default new EndpointService();