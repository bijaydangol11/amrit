import React, { Component } from 'react';
import Gallery from './Gallery'
import Copyright from './Copyright'
class Footer extends Component{
    render(){
        return(
            <div>

          <Gallery></Gallery>
          <Copyright></Copyright>
            </div>
            
        )
    }
}

export default Footer