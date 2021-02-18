import React,{Component} from 'react';


class Component1 extends Component{
    render(){
        return(
            <div>Header {this.props.name} and {this.props.ph}</div>
        )
    }
}

export default Component1
