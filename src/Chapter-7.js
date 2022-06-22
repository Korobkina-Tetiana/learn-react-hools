import { useEffect, useState } from 'react';

function useCharacterPosition(step) {
    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const handelKeyDown = (event) => {
            // eslint-disable-next-line default-case
            switch (event.key) {
                case 'ArrowLeft': 
                    setLeft((prev) => prev - step);
                    break;
                case 'ArrowRight': 
                    setLeft((prev) => prev + step);
                    break;
                case 'ArrowUp': 
                    setTop((prev) => prev - step);
                    break;
                case 'ArrowDown': 
                    setTop((prev) => prev + step);
                    break;
            }
        };

        document.addEventListener('keydown', handelKeyDown);

        return () => {
            document.removeEventListener('keydown', handelKeyDown);
        };
    }, [step]);

    return [left, top]
}

export function Character() {
    const [left, top] = useCharacterPosition(50);

    return (
        <>
        <h2>
            [{left}, {top}]
        </h2>
        <div style={{
            backgroundColor: '#F00',
            position: 'absolute',
            width: 100,
            height: 100,
            left,
            top,
        }} />
        </>
    )
}
