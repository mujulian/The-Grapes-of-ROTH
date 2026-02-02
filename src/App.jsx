import React from "react";
import HomeScreen from "./components/homeScreen";

function App() {
    const [started, setStarted] = useState(false);

    return (
        <div>
            {!started ? (
                <HomeScreen onPlay={() => setStarted(true)}/>
            ) : (
                <div>

                </div>
            )}
        </div>
    );
}

export default App;