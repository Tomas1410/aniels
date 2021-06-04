import React, { useState } from 'react'
import RecipesStyles from './RecipesAdd.module.css'
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { pushRecipe } from '../../actions/recipesActions'
import { Redirect } from "react-router-dom";



const RecipesAdd = ({ pushRecipe, msg }) => {
    const [tytul, setTytul] = useState('');
    const [krotki_opis, setOpis] = useState('');
    const [skladniki, setSkladniki] = useState('');
    const [sposob_wykonania, setWykonanie] = useState('');
    const [img, setImg] = useState();
    const [pora, setPora] = useState('');
    const [typ, setTyp] = useState('');
    const [czas_wykonania, setCzasWykonania] = useState('');
    const [zlozonosc, setZlozonosc] = useState('');

    const handleChangeTytul = (e) => setTytul(e.target.value);
    const handleChangeOpis = (e) => setOpis(e.target.value);
    const handleChangeSkladniki = (e) => setSkladniki(e.target.value);
    const handleChangeWykonanie = (e) => setWykonanie(e.target.value);
    const handleChangeimg = (e) => setImg(e.target.files[0]);
    const handleChangePora = (e) => setPora(e.target.value);
    const handleChangeTyp = (e) => setTyp(e.target.value);
    const handleChangeCzasWykonania = (e) => setCzasWykonania(e.target.value);
    const handleChangeZlozonosc = (e) => setZlozonosc(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('tytul', tytul);
        data.append('krotki_opis', krotki_opis);
        data.append('skladniki', skladniki);
        data.append('sposob_wykonania', sposob_wykonania);
        data.append('img', img);
        data.append('pora', pora);
        data.append('typ', typ);
        data.append('czas_wykonania', czas_wykonania);
        data.append('zlozonosc', zlozonosc);

        pushRecipe(data);

    }

    return (

        <div>
            <React.Fragment>
                <h1 className={RecipesStyles.logujSieHamie}>Dodaj przepis</h1>
                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <div className={RecipesStyles.container}>
                        <div>
                            <label htmlFor="tytul"><b>Tytul</b></label>
                            <br />
                            <input type="text" placeholder="Nadaj nazwę potrawy" name="tytul" onChange={handleChangeTytul} />
                        </div>
                        <div>
                            <label htmlFor="opis"><b>Krotki opis</b></label>
                            <br />
                            <textarea rows="2" cols="100" placeholder="Wprowadz krotki opis potrawy" name="krotki_opis" onChange={handleChangeOpis} />
                        </div>

                        <div>
                            <label htmlFor="skladniki"><b>Skladniki</b></label>
                            <br />
                            <textarea rows="4" cols="100" placeholder="Składniki na liście oddzielaj enterem, by pojawiały się jeden pod drugim" name="skladniki" onChange={handleChangeSkladniki} />

                        </div>
                        <div>
                            <label htmlFor="wykonanie"><b>Wykonanie</b></label>
                            <br />
                            <textarea rows="3" cols="100" placeholder="Opisz sposob przygotwania danej potrawy" name="sposob_wykonania" onChange={handleChangeWykonanie} />

                        </div>
                        <div>
                            <label htmlFor="img"><b>Dodaj zdjecie potrawy</b></label>
                            <br />
                            <input type="file" placeholder="Wybierz zdjecie" name="img" onChange={handleChangeimg} />
                        </div>

                        <label htmlFor="pora"><b>Pora w ktorej przygotowujesz potrawe</b></label>
                        <Form.Control as="select" size="lg" name="pora" onChange={handleChangePora}>
                            <option>Dowolne</option>
                            <option>Śniadanie</option>
                            <option>Obiad</option>
                            <option>Kolacja</option>
                        </Form.Control>
                        <label htmlFor="typ"><b>Sprobuj przyporzadkowac danie do danej grupy</b></label>
                        <Form.Control as="select" name="typ" onChange={handleChangeTyp}>
                            <option>Dowolne</option>
                            <option>Mleczne</option>
                            <option>Na ostro</option>
                            <option>Wegetariańskie</option>
                            <option>Mięsne</option>
                            <option>Fast-food</option>
                        </Form.Control>
                        <br />
                        <label htmlFor="czasWykonania"><b>Wybierz przyblizony czas realizacji potrawy</b></label>
                        <Form.Control size="sm" as="select" name="czas_wykonania" onChange={handleChangeCzasWykonania}>
                            <option>Dowolne</option>
                            <option>10 min</option>
                            <option>30 min</option>
                            <option>60 min</option>
                        </Form.Control>
                        <label htmlFor="zlozonosc"><b>Okresl zlozonosc potrawy</b></label>
                        <Form.Control type="range" name="zlozonosc" onChange={handleChangeZlozonosc} />

                        <button type="submit" className={RecipesStyles.buttonClass} >Dodaj przepis </button>
                        {msg === 'Added' ? <Redirect to="/" /> : <p style={{ color: 'red' }}>{msg}</p>}
                    </div>

                </form>

            </React.Fragment>



        </div>
    )
}

const mapToStateProps = state => ({
    msg: state.main.msg
})



export default connect(mapToStateProps, { pushRecipe })(RecipesAdd)
