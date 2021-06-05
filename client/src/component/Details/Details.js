import React, { useEffect, useState } from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import DetailsStyles from './Details.module.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchRecipe, pushComment } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import Loader from '../Main/Loader'

function Details({ przepis, fetchRecipe, user, pushComment, komentarz, isAuthenticated }) {

    const { przepisId } = useParams();
    const [comment, setComment] = useState()
    const handleComment = (e) => setComment(e.target.value)

    const newLineText = (item) => {

        const newText = item.split('\n').map(str => <li style={{ 'display': 'list-item' }}>{str}</li>);

        return newText;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const content = {
                komentarze: {
                    author: user.name,
                    treść: comment
                }
            }

            pushComment(content, przepisId)
        }
        catch (err) {
            console.log('cannot push comments, error:', err)
        }
        // window.location.reload();
    }

    useEffect(() => {
        fetchRecipe(przepisId);
    }, [komentarz])

    return (
        <div className={DetailsStyles.details}>

            <h2 className={DetailsStyles.title}> {przepis.tytul}</h2>
            <div className={DetailsStyles.imgur}>
                <img src={'/assets/' + przepis.img} className={DetailsStyles.pic} />
            </div>

            {/* <CardMedia
                className={DetailsStyles.imgur}
                image={'/assets/' + przepis.img}
                title="lasagneBolognese"
            /> */}
            <span className={DetailsStyles.krotkiOpis}>{przepis.krotki_opis}</span>

            <h1 className="details"> Składniki </h1>
            <ul className={DetailsStyles.skladniki}>
                {przepis.skladniki ? (newLineText(przepis.skladniki)) : ('')}




            </ul>

            <div className="content"><h1>Sposob wykonania</h1></div>
            <span className={DetailsStyles.sposobWykonania}>{przepis.sposob_wykonania}</span>

            <div className="comments">
                {isAuthenticated ? (<div className="bg-comments"> <h1 className="details"> Komentarze </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Wprowadz swoj komentarz" name="comment" onChange={handleComment} required />
                        <button type="submit" className="addComents"> Dodaj komentarz</button>
                    </form>
                </div>) : (<p style={{ marginTop: '20px', border: '1px solid black' }}>Aby dodać komentarz musisz sie zalogować</p>)}

                {przepis.komentarze === 0 ? '' : ''}
                {przepis.komentarze ? (przepis.komentarze.map(comment => <Comment key={comment.id} comment={comment} />)) : (<Loader />)}

            </div>

        </div >


    )

}

Details.propTypes = {
    przepis: PropTypes.object.isRequired,
    fetchRecipe: PropTypes.func.isRequired,
    przepisId: PropTypes.string.isRequired,
    user: PropTypes.object,
    pushComment: PropTypes.func,
    komentarz: PropTypes.object,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => {
    return {
        przepis: state.main.przepis,
        user: state.auth.user,
        komentarz: state.main.dodanyKomentarz,
        isAuthenticated: state.auth.isAuthenticated
    }
}
// const mapDispatchToProps = () => (id, dispatch) => {
//     return {
//         fetchRecipe: () => dispatch(fetchRecipe(id))
//     }
// }

export default connect(mapStateToProps, { fetchRecipe, pushComment })(Details)