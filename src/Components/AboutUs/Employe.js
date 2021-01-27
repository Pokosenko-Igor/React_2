import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'

export default class Employe extends Component{
    state = {
        loading: true,
        person: null
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => this.setState({
                person: data.results[0],
                loading: false
            }))
    }

    render(){
        if(this.state.loading) return <div>loading...</div>
        
        return(
            <div>
                <h1>Employee Of The Month</h1>
                <div className="text-center">
                    <h4>{this.state.person.name.first} {this.state.person.name.last}</h4>
                    <Image src={this.state.person.picture.large} roundedCircle style={{width: "200px", height: "200px"}} />
                </div>
            </div>
        )
    }
}