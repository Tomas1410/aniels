import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export default function Search() {

    const [userDetails, setUserDetails] = useState([])
    const [search, setSearch] = useState('')
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [user, setUser] = useState('')
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSearch('');
        setUserDetails([]);
    };

    const fetchRecipes = (query) => {
        setSearch(query)
        fetch('/szukaj', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query
            })
        }).then(res => res.json())
            .then(results => {
                setUserDetails(results)
            })
    }



    return (
        <div>

            <Button variant="outline-success" type="submit" className="linki3" onClick={handleOpen}>Szukaj</Button>


            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <input
                            type="text"
                            placeholder="Szukaj przepisu"
                            value={search}
                            onChange={(e) => { e.target.value === '' ? (function () { setSearch(''); setUserDetails([]) })() : (fetchRecipes(e.target.value)) }}
                        />
                        <ul className="collection">
                            {userDetails.map(item => (<Link to={'details/' + item._id} key={item._id} style={{ color: 'black !important', display: 'block' }} onClick={() => {
                                handleClose();
                                setSearch('');
                            }}>{item.tytul}</Link>)
                            )}
                        </ul>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
