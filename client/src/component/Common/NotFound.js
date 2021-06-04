import React from 'react'
import img from '../../static/recipes/notfound.jpg'
import NotfoundStyles from './Notfound.module.css'
export default function NotFound() {
    return (
        <div>
            <h4>Strona o podanym linku nie istnieje</h4>
            <img src={img} className={NotfoundStyles.imagestyle} width='900' height='300' />
        </div>
    )
}
