import { useNavigate } from 'react-router-dom';
import {useState} from "react";


const HomePage = () => {
    const [eventMessage, setEventMessage] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    function sendEvent() {

    }

    return (
        <div>
            <h1>Welcome to the webhook producer example</h1>
            <div>Try sending an event</div>
            <form onSubmit={sendEvent}>
                <input
                    className="inputText"
                    id="username"
                    type="text"
                    value={eventMessage}
                    onChange={(e) => setEventMessage(e.target.value)}
                    placeholder="Username"
                    required
                />
                <button type="submit">Send Message</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default HomePage;