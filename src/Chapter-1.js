import { useState } from 'react';

export function Clicker() {
    const [clicks, setClicks] = useState(0);
    const [showClicks, setShowClicks] = useState(false);
    
    const onClick = () => {
        setTimeout(() => {
            console.log(`set clicks ${clicks + 1}`);
            setClicks(prevValue => prevValue + 1);
        }, 3000);
    };

    
    const toggleShowClicks = () => {
        setShowClicks(prev => !prev);
    };

    const clicksText = showClicks ? `(${clicks})` : '';

    return (
        <div>
            <button onClick={onClick}>Click me, please ({clicksText})</button>
            <button onClick={toggleShowClicks}>Toggle show clicks</button>

        </div>

    )  
};