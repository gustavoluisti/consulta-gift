import React from 'react'

const TableGif = ({ gifs }) => {
    return (
        <>
            {gifs.map((dado) => (

                <ul key={dado.id}>
                    <img src={dado.images.original.url} className="imagem-gif" />
                </ul>
            ))

            }
        </>
    )
}

export default TableGif