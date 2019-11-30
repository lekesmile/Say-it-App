import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class AddPost extends Component {
    state = {
        title: '',
        body: '',
        loggedIn: false
    }

    useStyles = makeStyles(theme => ({
        rootit: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                width: 200,
                margin: theme.spacing(1),
            },
        },
    }));


    // componentWillMount() {
    //     if (localStorage.getItem(JSON.parse("userData"))) {
    //         console.log("User On")
    //     } else {
    //         this.setState({ loggedIn: true })
    //     }
    // }

    handleFormInput = (e) => {
        if (e.target.name === " ") {
            alert("Fields cannot be empty");
        }
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        try {
            let gettoken = JSON.parse(localStorage.getItem('userData'));
            let token = gettoken.data.authorization

            const sayIt = {
                title: this.state.title,
                body: this.state.body
            }



            Axios.post('http://localhost:5000/post', sayIt, {
                headers: {
                    'Authorization': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res =>
                    console.log(res)
                )

        }

      
       
       catch(error) {
        console.log('You have to login in');
        alert('Please log in to post message');
        return error
    }

 }




    render() {
        const classes = this.useStyles;
        if (this.state.loggedIn === true) {
            return (<Redirect to={"/"} />)
        }
        return (
            <div className="formA">
                <form className={classes.rootit} onSubmit={this.handleSubmit}>

                    <TextField

                        label="Title"
                        variant="outlined"
                        color="default"
                        name="title"
                        onChange={this.handleFormInput}
                    />

                    {" "}{" "}
                    {" "}{" "}
                    <TextField

                        label="Message "
                        variant="outlined"
                        color="default"
                        name="body"
                        onChange={this.handleFormInput}

                    />
                    {" "}{" "}

                    <Button variant="contained"
                        color="primary"
                        type="submit"
                        size="extended"
                        startIcon={<SaveIcon />}
                    >
                        Post
                    </Button>


                </form>
            </div>
        )
    }
}
