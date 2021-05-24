import React from 'react'
import './Konto.css';
import img from '../../static/login/maklowicz.jpg'

export default function Konto() {
    // return (
    //     <div>
            
    //         <Baner title="Details"/>
    //     </div>
    // )

    return (
        
        
        <div className="Konto">
            <div className="nazwaKonta">Robert Makłowicz</div>
            <button className="edytuj ">Edytuj dane</button>
            <button className="zapisz ">Zapisz dane</button>
            <img className="avatar_konto" src={img} alt="avatar"/>
            
            <div className="opisKonta">
            <form>
            <div class="container">
              <label><b>Imie</b></label>
              <input type="text" />
              <label><b>Nazwisko</b></label>
              <input type="text" />
              <label><b>Email</b></label>
              <input type="text" />
              <label><b>Wiek</b></label>
              <input type="text" />
              <label><b>Ulubione danie</b></label>
              <input type="text" />
              <label><b>Coś o sobie</b></label>
              <input type="text" />
            </div>
            
        </form>
            </div>

        </div>
        
    )

}