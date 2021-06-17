import React, { useEffect, useState } from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import DetailsStyles from './Details.module.css';
import Comment from './Comment'
import { connect } from 'react-redux'
import { fetchRecipe, pushComment } from '../../actions/recipesActions'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"
import Loader from '../Main/Loader'
import { Link } from 'react-router-dom';
import LoginStyles from '../Login/Login.module.css'
import { useHistory } from "react-router-dom";
import Table from './Table'
function Details({ przepis, fetchRecipe, user, pushComment, komentarz, isAuthenticated }) {

    const { przepisId } = useParams();
    const history = useHistory();
    const [comment, setComment] = useState()
    const handleComment = (e) => setComment(e.target.value)


    const newLineText = (item) => {

        const newText = item.split('\n').map(str => <p>{str}</p>);

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
        setComment('')
    }, [komentarz, przepisId])

    return (
        <div className={DetailsStyles.gridContainer}>

            <h1 className={DetailsStyles.title}> {przepis.tytul}</h1>

            <img src={'/assets/' + przepis.img} className={DetailsStyles.pic} />

            <h2 className={DetailsStyles.smallDesc}>{przepis.krotki_opis}</h2>


            {przepis.skladniki ? (<Table skladniki={przepis.skladniki} />) : ('')}





            <div className={DetailsStyles.bigDesc}>
                <h1>Sposob wykonania</h1>
                <p >{przepis.sposob_wykonania ? przepis.sposob_wykonania : ('')}</p>
            </div>
            <div className={DetailsStyles.komentarze}>
                {isAuthenticated ? (<div className="bg-comments"> <h1 className="details"> Komentarze </h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Wprowadz swoj komentarz" name="comment" onChange={handleComment} value={comment} required />
                        <button type="submit" className="addComents"> Dodaj komentarz</button>
                    </form>
                </div>) :
                    (<React.Fragment>
                        <div style={{ marginTop: '30px' }}>
                            <h4 style={{ paddingBottom: '20px' }}>Aby dodać komentarz musisz sie zalogować</h4>
                            <Link to={{ pathname: '/login', state: { prevPath: window.location.pathname } }} className={LoginStyles.buttonClass} >Zaloguj sie </Link>
                            {/* <Link to={'/login'} className={LoginStyles.buttonClass} >Zaloguj sie </Link> */}
                            {/* <button onClick={() => history.push('/login')}>Zaloguj sie</button> */}

                        </div>


                    </React.Fragment>)}

                {przepis.komentarze && przepis.komentarze.length === 0 ? <p style={{ color: 'blue', marginTop: '15px' }}>Przepis nie ma jeszcze żadnego komentarza</p> : ''}
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