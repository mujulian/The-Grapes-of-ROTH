import React from "react";

function HomeScreen({ onPlay }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen 
                        bg-gradient-to-b from-[#240952] via-[#240952] to-[#6622CC] text-white px-4 text-center" >
            <h1 className="text-6xl md:text-7xl font-black text-[#F0F4EF] ">
                The Grapes of{" "}
            <span className="font-black text-[#A755C2]">
                ROTH
            </span>
            </h1>
            <h2>The ultimate ROTH IRA management simulator. </h2>
            <p>
                Start as a 22 year old and choose how to fund and grow your ROTH IRA.
                Will you be retirement ready?   
            </p>
            <button
                onClick={onPlay}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg 
                           hover:scale-105 transform transition duration-300"
            >
            Play
            </button>
        </div>
    );
}

export default HomeScreen;