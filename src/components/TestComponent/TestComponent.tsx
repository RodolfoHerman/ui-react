import React, { useState } from 'react';
import './TestComponent.css';

function TestComponent(props: { name: string }) {

    // Trabalhar com estados dentro de componentes funcionais é através de hooks, neste caso está sendo usado
    // o hook de state (estado)
    const [age, setAge] = useState(32);

    return <div className="TestComponent">
        Olá, { props.name }, { age }
        <button onClick={() => {

            setAge(age + 1);
        }}>
            +
        </button>
    </div>
}

// const TestComponent = () => (
//     <div className="TestComponent">Test Component !!</div>
// )

export default TestComponent;