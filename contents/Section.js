import React, { Component } from 'react'
import M from 'materialize-css'
import pic from '../img/pic2.jpg'
import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic4.jpg'

export default class Section extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {});
            var ele = document.querySelectorAll('.scrollspy');
            var instance = M.ScrollSpy.init(ele, {});
          });
    }
    
    render() {
        return (
            <div className='container section scrollspy' id='photos'>
                <div className="row">
                    <div className="col s12 l4">
                        <img className='responsive-img materialboxed' src={pic} alt="pic"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h2 className="indigo-text text-darken-4">CoSmos</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Tenetur nam reiciendis quibusdam!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 push-l7 offset-l1">
                        <img className='responsive-img materialboxed' src={pic1} alt="pic"/>
                    </div>
                    <div className="col s12 l6 pull-l5 offset-l1 right-align">
                        <h2 className="indigo-text text-darken-4">NaTure</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Tenetur nam reiciendis quibusdam!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 ">
                        <img className='responsive-img materialboxed' src={pic2} alt="pic"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h2 className="indigo-text text-darken-4">LIgHts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Tenetur nam reiciendis quibusdam!</p>
                    </div>
                </div>
            </div>
        )
    }
}
