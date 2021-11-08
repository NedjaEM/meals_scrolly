import React, { Component} from 'react';


class Step1 extends Component {
    render(){
        console.log(this.props.d)
        return <h1>{this.props.d} </h1>
    }
}

export default Step1;