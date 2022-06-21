import { useState } from 'react';

function FormField(props) {
    const { name, label, value, onChange, type = 'text' } = props;

    return (
        <div>
          <label htmlFor={name}>{label}</label>
          <input
            name={name}
            type={type}  
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />
        </div>
    );
}

const DEFAULT_AGE = 21;

export function FormExample() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState( DEFAULT_AGE);

    const clear = () => {
        setFirstName('');
        setLastName('');
        setAge( DEFAULT_AGE );
    };

    return (
        <>
            <form>
                <FormField
                name='FirstName'
                label='First Name'
                value={firstName}
                onChange={(newValue) => setFirstName(newValue)}
                />

                <FormField
                name='lastName'
                label='Last Name'
                value={lastName}
                onChange={(newValue) => setLastName(newValue)}
                />

                <FormField
                name='age'
                label='Age'
                value={age}
                onChange={(newValue) => setAge( newValue ? parseInt(newValue) : 0 )}
                type='number'
                />   
            </form>

            <div>
                <button onClick={clear}>CLEAR</button>
            </div>

            <div>
                firstName: {firstName} <br />
                lastName: {lastName} <br />
                age: {age} <br />
            </div>
        </>
    );
}