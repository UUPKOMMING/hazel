import React, { Component } from 'react'
import M from 'materialize-css'

export default class Parallax extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
          });
    }
    
    render() {
        return (
            <>
              <div className="parallax-container">
                  <div className="parallax"><img src={this.props.src} alt="pic"/></div>
                  </div>  
            </>
        )
    }
}
