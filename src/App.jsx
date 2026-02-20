import React, {useState} from "react";
import HomeScreen from "./components/HomeScreen";
import InvestmentForm from "./components/InvestmentForm";

function App() {
    const [started, setStarted] = useState(false);
    const [portfolio, setPortfolio] = useState([{
        // create stocks here
        stock:"ZOOG", value:0
    }])
    const [cash, setCash] = useState(500);
    const [turn, setTurn] = useState(1);

    const nextTurn = async (allocations) => {
        // add newly invested money to portfolio
        const newPortfolio = portfolio.map(p => ({
            ...p,
            value: p.value + (allocations[p.stock] || 0)
        }));

        setPortfolio(newPortfolio);
    };

    return (
        <div>
            {!started ? (
                // Home screen
                <HomeScreen onPlay={() => setStarted(true)}/>
            ) : (
                // Gameplay
                <div>
                    <p>GAME HERE</p>
                    <InvestmentForm portfolio={portfolio} setPortfolio={setPortfolio} cash={cash} setCash={setCash} 
                                    nextTurn={nextTurn}></InvestmentForm>
                </div>
            )}
        </div>
    );
}

export default App;