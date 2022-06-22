import { useEffect, useState, useRef, useCallback } from 'react';
import { useCounter } from './Chapter-3'

function useUpdateEffect(callback) {
    const firstRender = useRef(true);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;   
        } else {
            callback();
        }
    }, [callback]);
}

export function ExampleContainer() {
    const [value, increment] = useCounter();

    useEffect (() => {
        console.log('mounted');
    }, []);


    console.log(`render, value: ${value}`);

    const callback = useCallback(() => {
        console.log(`value update: ${value}`);
    }, [value]);

    useUpdateEffect(callback);

    return <button onClick={increment}>RENDER</button>;
}

// export function ExampleContainer() {
//     const refContainer = useRef();

//     const toggledRef = useRef(false);
//     const [toggledState, setToggledState] = useState(false);


//     const focusInput = () => {
//         refContainer.current?.focus();
//     };

//     const onChange = (event) => {
//         const text = event.target.value;
//         if (text === 'blur') {
//             refContainer.current?.blur();
//         }
//     };

//     const changeRef = () => {
//         toggledRef.current = !toggledRef.current;
//         console.log(`toggled to: ${toggledRef.current}`);
//     };

//     const changeState = () => {
//         setToggledState((prev) => !prev);
//     };

//     console.log(`toggledRef: ${toggledRef.current}, toggledState: ${toggledState}`);

//     return (
//         <div>
//             <input ref={refContainer} onChange={onChange}/>
//             <p>
//                 <button onClick={focusInput}>FOCUS</button>
//             </p>
//             <p>
//                 <button onClick={changeRef}>TOGGLE REF</button>
//                 <button onClick={changeState}>TOGGLE STATE</button>
//             </p>
//         </div>
//     );
// }