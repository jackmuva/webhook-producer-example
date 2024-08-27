import StandardApi from "../util/StandardApi.js";

class MessageService extends StandardApi{
    postMessage(message){
        return this.postWithAuth('/post-message', message).then(response => response.json());
    }
}

export default new MessageService();