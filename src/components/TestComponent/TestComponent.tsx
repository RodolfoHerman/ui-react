import React, { useState, useEffect } from 'react';
import './TestComponent.css';

function TestComponent(props: { name: string }) {

    // Trabalhar com estados dentro de componentes funcionais é através de hooks, neste caso está sendo usado
    // o hook de state (estado)
    const [age, setAge] = useState(32);

    useEffect(() => {

        console.log('Componente criado - quando termina a criação é chamado (análogo ao didMount)');        
    }, []);

    console.log('Verificando chamada se acontece antes do useEffect (também é chamado no update)');

    useEffect(() => {

        // Executa este callback toda vez que houver alteração na varável observada 'age' (variável de dependência)
        console.log(`Observando mudanças na variável age (análogo ao didUpdate) - ${ age }`);
    }, [age])

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