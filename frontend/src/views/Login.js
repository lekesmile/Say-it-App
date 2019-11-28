import React, { Component } from 'react'
import {makeStyles} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import Axios from 'axios';


const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
        height:10,
    
    },
}));


export default class Login extends Component {
 state={
     username : "",
     password : ""
 }

 inputHandler =(e) => {
     this.setState({
         [e.target.name]: e.target.value
     })

 }

 formHandler =(e)=>{
    e.preventDefault();
    const user = {
        username: this.state.username,
        password:this.state.password
    }

    Axios.post('http://localhost:5000/login', user)
    .then(res=>(
        console.log(res)
    ))
 }
    render() {
        const classes = useStyles;
        return (
            <div>
                <form className={classes.container} onSubmit={this.formHandler}>
                    <TextField
                       
                        label="username"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                        name="username"
                        onChange={this.inputHandler}
                    />
                    <TextField
                     
                        label="Password"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="filled"
                        name="password"
                        onChange={this.inputHandler}

                    />

                   <button className={green}>
                       login
                   </button>
                </form>
            </div>
        )
    }
}
