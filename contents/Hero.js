import React, { Component } from 'react'
import M from 'materialize-css'
export default class Footer extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.tooltipped');
            var instances = M.Tooltip.init(elems, {});
          });
    }
    render() {
        return (
            <>
         <div className="page-footer grey darken-3">
             <div className="container">
                 <div className="row">
                     <div className="col s12 l4">
                         <h5>About ME</h5>
                         <p>Lorem ipsum dolor sit amet, 
                             id error quidem temporibus rerum laudantium doloremque architecto. Necessitatibus dolorem quae tempora officiis.</p>
                         <p>Lorem ipsum dolor sit amet, 
                             id error quidem temporibus rerum laudantium doloremque architecto. Necessitatibus dolorem quae tempora officiis.</p>
                     </div>
                     <div className="col s12 l6 offset-l2">
                         <h5>Connect</h5>
                         <ul>
                             <li><a href="#" className="grey-text text-lighten-3">Facebook</a></li>
                             <li><a href="#" className="grey-text text-lighten-3">Twitter</a></li>
                             <li><a href="#" className="grey-text text-lighten-3">Instagram</a></li>
                             <li><a href="#" className="grey-text text-lighten-3">Linked In</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
             <div className="footer-copyrights grey darken-4">
             <div className="container center-align tooltipped" data-tooltip='this site is under the copyRight law'>&copy;2020 Mr Upkomming Dev</div>
         </div>
         </div>
         
         </>
        )
    }
}
