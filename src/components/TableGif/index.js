import React from 'react'
import './TableGif.css'

import CopyButton from '../Copy'
import { FaGratipay } from 'react-icons/fa';

const TableGif = ({ gifs }) => {

    const favorites = (id, url, title, embed_url) => {
        saveLocalStorage(id, url, title, embed_url)
    }

    const saveLocalStorage = (id, url, title, embed_url) => {
        let favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]')
        favoritos.push({
            id,
            url,
            title,
            embed_url
        })
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    return (
        <div className='container'>


            {gifs.map((dado, index) => (
                <div key={dado.id}>
                    <ul >
                        <img src={dado.images.original.url} className="imagem-gif item" alt={dado.title} />
                        <div className='container'>
                            <button className='btn btn-danger item mr-3' onClick={() => { favorites(dado.id, dado.images.original.url, dado.title, dado.embed_url) }}>Favoritar <FaGratipay /></button>
                            <CopyButton className=' item' embed_url={dado.embed_url} />
                            
                        </div>
                        <textarea
                            className='copy-text'
                            defaultValue={dado.embed_url}
                        /> 
                    </ul>

                </div>




            ))

            }
        </div>
    )
}

export default TableGif