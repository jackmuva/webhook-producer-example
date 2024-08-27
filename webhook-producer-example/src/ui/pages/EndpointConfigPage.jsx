import {v4 as uuidv4} from "uuid";
import {useEffect, useState} from "react";
import EndpointService from "../../services/EndpointService.js";

const EndpointConfigPage = () => {
    const [newEndpoint, setNewEndpoint] = useState("");
    const [curEndpoints, setCurEndpoints] = useState([]);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const fetchEndpoints = async() => {
            const response = EndpointService.getEndpoint();
            const endpoints = await response;
            setCurEndpoints(endpoints);
        }
        fetchEndpoints();
    }, [added]);

    async function sendEvent() {
        const endpointObject = {
            endpoint_id: uuidv4(),
            endpoint: newEndpoint,
            key_location: "n/a"
        }
        await EndpointService.postEndpoint(endpointObject).then(() => {
            toggleAdded();
        });
    }

    function toggleAdded(){
        setAdded(!added);
    }


    return (
        <div>
            <h1>Configure your endpoint URL</h1>
            <div>CurrentEndpoints</div>
            {curEndpoints.map(item => (
                <li key={item.endpoint}>{item.endpoint}</li>
            ))}
            <div>Add your endpoint</div>
            <form onSubmit={sendEvent}>
                <input
                    className="inputText"
                    id="endpoint"
                    type="text"
                    value={newEndpoint}
                    onChange={(e) => setNewEndpoint(e.target.value)}
                    placeholder="Endpoint URL"
                    required
                />
            </form>
            <button onClick={sendEvent}>Save Endpoint</button>
        </div>
    );
}

export default EndpointConfigPage;