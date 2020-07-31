import React from 'react'
import { withRouter } from 'react-router-dom'
import './ItemCard.scss'


function ItemCard({ linkto, imgname, name, history}) {
    return (
        <div 
        className='item-box'
        onClick={()=> history.push(`shop/${linkto}`)}>
            <img
            src={imgname} 
            alt={name}
            />
            <div className='inner-item'>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default withRouter(ItemCard)
