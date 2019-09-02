import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Search.css'

function Search(props) {
    const api_key = 'w42HFJy5XN3cyIN0EFYptLKIJGunWn92'

    const [searchTerm, setSearchTerm] = useState("")
    const [gifs, setGifs] = useState([])
    const onInputChange = e => {
        setSearchTerm(e.target.value)
    }

    const buscaGif = async () => {
        const result = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${api_key}`)
        setGifs(result.data.data)
        console.log(result.data.data)
    }

    useEffect(() => {
        buscaGif()
    }, [])

    const onSubmitHandler = e => {
        e.preventDefault()
        buscaGif()
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label >Nome</label>
                <input type="text" value={searchTerm} onChange={onInputChange} className="form-control" id="searchTerm" placeholder="Nome da série" />
            </div>
            <button type="submit">Search</button>
        </form>

        
            {gifs.map((dado) => (

                <ul key={dado.id}>
                    <img src={dado.images.original.url} className="imagem-gif" />
                </ul>
            ))

            }
        </>
  )

}

export default Search