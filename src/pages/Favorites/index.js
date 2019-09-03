import React, { Component } from 'react'

export default class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount = () => {
        if( localStorage.length > 0) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            console.log(favoritos)

            if(Object.keys(favoritos).length === 0 && favoritos.constructor === Object) {
                return
            }
            this.setState({ favoritos: favoritos})
        }



    }

render() {
    const favoritos = this.state
    return (
        <div>
            <h1>Favoritos</h1>
            {JSON.stringify(favoritos)}
        </div>
    )
}
    
}