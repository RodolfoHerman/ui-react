import React from 'react';

class ClassComponent extends React.Component<{ name: string}> {

    state = {
        name: 'State name'
    }

    constructor(props: any) {

        super(props);
        console.log('Passou no contructor');
    }

    componentDidMount() {

        console.log('Passou no did mount');
    }

    componentDidUpdate() {

        console.log('Passou no did update');
    }

    render() {

        console.log('Passou no render');

        // Recuperando informações do estado do componente baseado em classe
        // return <div>
        //     Olá { this.state.name }, este componente é baseado em classe.
        // </div>

        // Recuperar informações passadas através dos atributos (props) do componente baseado em classe
        // return <div>
        //     Olá { this.props.name }, este componente é baseado em classe.
        // </div>

        //Alterar estado em componentes baseados em Classe
        return <div>
            <p>Name: { this.state.name }</p>
            <button onClick={ () => {
                this.setState({ name: 'Rodolfo' })
            }}>
                Click me!!!
            </button>
        </div>
    }
}

export default ClassComponent;