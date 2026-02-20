import React, { useState } from "react";

function InvestmentForm({ portfolio, setPortfolio, cash, setCash, nextTurn }) {
    const [allocations, setAllocations] = useState({"ZOOG":0});

    const handleSubmit = () => {
        let totalAlloc = Object.values(allocations).reduce((a, b) => a + b, 0);
        if (totalAlloc > cash) {
            alert("You don't have enough money to purchase this!");
            return;
        }

        nextTurn(allocations);
    };

    return (
        <div>
            <h2>Allocate your paycheck</h2>
            {["ZOOG"].map(stock => (
                <div key={stock}>
                    {stock}: <input type="number" value={allocations[stock]}
                                    onChange={(e)=>setAllocations({...allocations, [stock]: +e.target.value})}></input>
                </div>
            ))}
            <button onClick={handleSubmit}>Invest</button>
        </div>
    )
};

export default InvestmentForm