import React from 'react'
import { Nav } from 'react-bootstrap';
import { logout } from '../../actions/authAction'
import { connect } from 'react-redux'
function Logout({ logout }) {

    return (
        <Nav.Link href="#" onClick={logout}>Logout</Nav.Link>
        // <button onClick={logout} Wyloguj sie></button>
    )
}
export default connect(null, { logout })(Logout)


