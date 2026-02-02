import React, {useState} from "react";
import HomeScreen from "./components/HomeScreen";

function App() {
    const [started, setStarted] = useState(false);

    return (
        <div>
            {!started ? (
                <HomeScreen onPlay={() => setStarted(true)}/>
            ) : (
                <div>
                    <p>GAME HERE</p>
                </div>
            )}
        </div>
    );
}

export default App;