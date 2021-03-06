import React, { Component } from 'react'
import M from 'materialize-css'

export default class Button extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.fixed-action-btn');
            var instances = M.FloatingActionButton.init(elems, {});
          });
    }
    
    render() {
        return (
            
            <div class="fixed-action-btn">
              <a class="btn-floating btn-large indigo">
                <i class="large material-icons">mode_edit</i>
              </a>
              <ul>
                <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
              </ul>
            </div>
        )
    }
}
