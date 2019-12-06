import React, { Component } from 'react'
import Axios from 'axios'
import MUIcards from '../components/MUIcards'
import Navbar from '../components/Navbar'
import NavbarCopy from '../components/NavbarCopy'
import { Container } from '@material-ui/core'
import AddPost from './AddPost'


export default class Home extends Component {

    state = {
        getData: [],
        loggedIn: false

    }

    componentDidMount() {
        Axios.get('http://localhost:5000/post')
            .then(response => {

                if (localStorage.getItem('userData') != null) {
                    this.setState({
                        getData: response.data,
                        loggedIn: true
                    })
                   
                }
            })
            .catch(error => console.log(`Error fetch API ${error}`))

    }

    render() {
        let { getData, loggedIn } = this.state
        return (


            <div>
                {loggedIn === true ? <NavbarCopy  /> : <Navbar />}

                <Container className="Container">
                    <AddPost />
                    {getData.map(getd => (

                        <MUIcards
                            key={getd._id}
                            headtitles={getd.title}
                            body={getd.body}

                        />

                    ))}
                </Container>
            </div>
        )
    }
}


