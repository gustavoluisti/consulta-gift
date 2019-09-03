import React, { Component } from 'react'
import './Favorites.css'

import Header from '../../components/Header'

export default class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount = () => {
        if (localStorage.length > 0) {
            let favoritos = JSON.parse(localStorage.getItem('favoritos'))
            console.log(favoritos)
            if (Object.keys(favoritos).length === 0 && favoritos.constructor === Object) {
                return
            }
            this.setState({ favoritos: favoritos })
        }
    }

    render() {
        const favoritos = this.state
        return (
            <div>
                <Header />
                <div className='container '>
                    {favoritos.favoritos.map((dado, index) => (
                        <div className=' '>
                            <h5 className='title'>{dado.title}</h5>
                            <img className='imagem-gif' src={dado.url} />
                        </div>
                    ))}
                </div>
            </div>

        )
    }

}