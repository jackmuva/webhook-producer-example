import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import MessageService from "../../services/MessageService.js";


const HomePage = () => {
    const [eventMessage, setEventMessage] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    console.log(sessionStorage.accessToken.toString());

    async function sendEvent() {
        const message = {
            message_id: uuidv4(),
            message:eventMessage
        }
        await MessageService.postMessage(message);
    }

    function redirectToEndpointConfig() {
        navigate('/endpoint-config');
    }

    return (
        <div>
            <h1 className={"text-2xl"}>Welcome to the webhook producer example</h1>
            <div>First configure an endpoint that will receive webhook messages</div>
            <button onClick={redirectToEndpointConfig}> Configure Endpoints </button>
            <div>Try sending an event</div>
            <form onSubmit={sendEvent}>
                <input
                    className="inputText"
                    id="message"
                    type="text"
                    value={eventMessage}
                    onChange={(e) => setEventMessage(e.target.value)}
                    placeholder="Message"
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;