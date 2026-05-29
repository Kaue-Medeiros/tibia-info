import React, { Component } from 'react'

export default class YasirDisplay extends Component {
    YasirStatus = () => {
        fetch(`http://localhost:3001/api/yasir/${this.props.serverName}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ yasir: data ? 'Ativo' : 'Inativo' })
            })
            .catch(() => this.setState({ yasir: 'Inativo' }))
    }

    state = {
        yasir: 'Carregando...'
    }

    componentDidMount() {
        this.YasirStatus()
    }

    // Recebe o props anterior e checa se o servidor é o mesmo
    // Caso não seja, troque Yasir para "Carregando" e cheque o Status do Yasir denovo pela callback, atualizando sua State e renderizando novamente
    componentDidUpdate(prevProps) {
        if (prevProps.serverName !== this.props.serverName) {
            this.setState({ yasir: 'Carregando...' }, () => {
                this.YasirStatus()
            })
        }
    }



    render() {
        return (
            <div>
                <h1>Yasir em <br/><span className="server-important-info">{this.props.serverName}</span></h1>
                <h1>Status: {this.state.yasir}</h1>
            </div>
        )
    }
}