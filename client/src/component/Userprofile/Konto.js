import React from 'react'
import './Konto.css';
import img from '../../static/login/maklowicz.jpg'
import { connect } from 'react-redux'
import Loader from '../Main/Loader'
import moment from "moment";
import 'moment/locale/pl'  // without this line it didn't work
moment.locale('pl')
function Konto({ user }) {

    return user ? (


        <div className="Konto">
            <div className="nazwaKonta">Witaj na swoim profilu Tomasz</div>
            <img className="avatar_konto" src={img} alt="avatar" />

            <div className="opisKonta">
                <form>
                    <div class="container">
                        <h2 style={{ fontWeight: 'bolder' }}>Nazwa uzytkownika</h2>
                        <h4>{user.name}</h4>
                        <h2 style={{ fontWeight: 'bolder' }}>Email</h2>
                        <h4>{user.email}</h4>
                        <h2 style={{ fontWeight: 'bolder' }}>Data stworzenia konta</h2>

                        <h4>{moment(user.createdAt).utc().format('D MMMM YYYY, h:mm:ss')}</h4>
                    </div>

                </form>
            </div>

        </div>

    ) : (<Loader />)

}
const mapToStateProps = state => ({
    user: state.auth.user
})

export default connect(mapToStateProps, null)(Konto)