import React, { useState } from 'react';
import Api from '../../services/api'
import './Search.css'

import TableGif from '../TableGif'

function Search(props) {
    const api_key = 'w42HFJy5XN3cyIN0EFYptLKIJGunWn92'
    const [searchTerm, setSearchTerm] = useState("")
    const [gifs, setGifs] = useState([])
    const onInputChange = e => {
        setSearchTerm(e.target.value)
    }

    const buscaGif = async () => {
        const limit = 150
        const result = await Api.get(`/search?q=${searchTerm}&api_key=${api_key}&limit=${limit}`)
        setGifs(result.data.data)
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        buscaGif()
    }

    return (
        <div className='container-fluid mt-3'>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={onInputChange}
                        className="form-control"
                        id="searchTerm"
                        placeholder="Digite o nome da GIF desejada" />
                </div>
                <button className='btn btn-primary' type="submit">Buscar</button>
            </form>

            <TableGif gifs={gifs} />
        </div>

    )

}

export default Search