import React, { Component } from 'react';
import Logo from './Logo'
import Menubar from './Menubar'
class Header extends Component{
    render(){
        return(
            <div>

            <Logo></Logo>
            <Menubar></Menubar>
            </div>
            
        )
    }
}

export default Header