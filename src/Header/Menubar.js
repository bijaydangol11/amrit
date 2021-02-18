import { Component } from "react";

class Menubar extends Component{
    state={
        "username":"softwarica",
        "email":"hdhdfh2@gmail.com",
        "phone":"848484"
    }

    ChangeText=(a,b)=>{
        this.setState({
            "username":a,
            "email":b
        })
    }

    render(){
        return(
            <div>menubar {this.state.email}
            <h1>{this.state.username}</h1>

            <button onClick={this.ChangeText.bind(this,"pen","eraser")}>Click here</button>
            </div>
        )
    }
}

export default Menubar