import React, { Component } from 'react'
import Axios from 'axios'
import MUIcards from '../components/MUIcards'
import Navbar from '../components/Navbar'
import { Container } from '@material-ui/core'
import AddPost from './AddPost'


export default class Home extends Component {
    state = {
        getData: []
      
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/post')
            .then(response => {
                this.setState({ getData: response.data });
                console.log(this.state)
                // if (localStorage.getItem("userData")) {
                //     console.log("User On")
                // } else {
                //     this.setState({ loggedIn: true })
                // }
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

   

    render() {
        let { getData } = this.state
       
        return (


            <div>
                <Navbar />
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


