import React, { useRef, useState } from 'react'
import './TableGif.css'

import CopyButton from '../Copy'

const TableGif = ({ gifs }) => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef('');
    const [dados, setDados] = useState('')

    // function copyToClipboard(id , embed_url) {
    //     const dados = embed_url
        
    //     textAreaRef.current.select();
    //     document.execCommand('copy');
    //     setCopySuccess('Copied!');
    //     setDados(dados)
    //     console.log(dados)
    // };

    const copyToClipboard = (url) =>  {
        const textField = document.createElement('textarea');
        textField.innerText = url;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        console.log(url)
      };
    

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

                        {/* {
                            document.queryCommandSupported('copy') &&
                            <div className='container container-flex'>
                                <button className='btn btn-warning item' onClick={() => { copyToClipboard(dado.id, dado.images.original.url) }}>Copy</button>
                                <button className='btn btn-danger item' onClick={() => { favorites(dado.id, dado.images.original.url, dado.title, dado.embed_url) }}>Favorito</button>
                                {copySuccess}
                            </div>
                        }
                        <textarea
                            className='copy-text'
                            ref={textAreaRef}
                            defaultValue={dado.embed_url}
                        /> */}
                        <CopyButton embed_url={dado.embed_url} />
                    </ul>

                </div>




            ))

            }
        </div>
    )
}

export default TableGif