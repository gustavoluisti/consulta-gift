import React, { Component } from 'react'
import './Favorites.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

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
                <div className='container mt-5'>
                    {favoritos.favoritos.map((dado, index) => (

                        <div key={index} className='row'>
                            {
                                dado.length === '' || dado.length === 0 ?
                                    <h1>Você ainda não salvou nenhuma Gift :( </h1>
                                    :

                                    <>
                                        <h5 className='title'>{dado.title}</h5>
                                        <img className='imagem-gif-favorites' src={dado.url} alt={dado.title} />
                                        <textarea defaultValue={dado.embed_url} />
                                    </>
                            }

                        </div>
                    ))}
                </div>
                <Footer />
            </div>
        )
    }

}