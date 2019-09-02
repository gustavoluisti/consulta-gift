import React from 'react'
import './TableGif.css'

const TableGif = ({ gifs }) => {
    return (
        <div className='container'>
            {gifs.map((dado) => (

                <ul key={dado.id}>
                    <img className="item" src={dado.images.original.url} className="imagem-gif" />
                </ul>
            ))

            }
        </div>
    )
}

export default TableGif