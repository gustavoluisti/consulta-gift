import React, { useRef, useState } from 'react'
import './TableGif.css'

const TableGif = ({ gifs }) => {

    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        e.preventDefault();
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

    return (
        <div className='container'>


            {gifs.map((dado) => (

                <form>
                    <div key={dado.id}>

                        <ul >
                            <img className="item" src={dado.images.original.url} className="imagem-gif" />
                            {
                                document.queryCommandSupported('copy') &&
                                <div>
                                    <button onClick={copyToClipboard}>Copy</button>
                                    {copySuccess}
                                </div>
                            }
                            <textarea
                                ref={textAreaRef}
                                defaultValue={dado.embed_url}
                            />
                        </ul>

                    </div>

                </form>


            ))

            }
        </div>
    )
}

export default TableGif