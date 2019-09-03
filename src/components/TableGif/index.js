import React, { useRef, useState } from 'react'
import './TableGif.css'

const TableGif = ({ gifs }) => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    const favorites = (id, url, title, embed_url) => {
       saveLocalStorage(id, url, title, embed_url)
    }

   const saveLocalStorage = (id, url, title, embed_url) =>{
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
                            
                            {
                                document.queryCommandSupported('copy') &&
                                <div className='container container-flex'>
                                    <button className='btn btn-warning item' onClick={() =>{copyToClipboard(index)}}>Copy</button>
                                    <button className='btn btn-danger item' onClick={() => {favorites(dado.id, dado.images.original.url, dado.title,dado.embed_url )}}>Favorito</button>
                                    {copySuccess}
                                </div>
                            }
                            <textarea
                                className='copy-text'
                                ref={textAreaRef}
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