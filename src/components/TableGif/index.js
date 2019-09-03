import React, { useRef, useState } from 'react'
import './TableGif.css'

const TableGif = ({ gifs }) => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopySuccess('Copied!');
    };

    const favorites = (id, url, title) => {
        console.log(id)
        console.log(url)
        console.log(title)

       saveLocalStorage(id, url, title)
    }

   const saveLocalStorage = (id, url, title) =>{
        let key = 'inicio';
        localStorage.setItem(key, 'Value');
        let data = { 
            id,
            url,
            title
        };
        localStorage.setItem(key, JSON.stringify(data));
    }

   

    return (
        <div className='container'>


            {gifs.map((dado) => (
                    <div key={dado.id}>

                        <ul >
                            <img className="item" src={dado.images.original.url} className="imagem-gif" />
                            {
                                document.queryCommandSupported('copy') &&
                                <div>
                                    <button onClick={copyToClipboard}>Copy</button>
                                    <button onClick={() => {favorites(dado.id, dado.images.original.url, dado.title )}}>Favorito</button>
                                    {copySuccess}
                                </div>
                            }
                            <textarea
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