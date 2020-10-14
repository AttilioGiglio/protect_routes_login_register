import React from 'react'
import HeroeList from '../heroes/heroe_list'

const Marvel = () => {
    return (
        <div>
            <h1>Marvel</h1>
            <hr />
            <HeroeList publisher={'Marvel Comics'} />
        </div>
    )
}

export default Marvel
