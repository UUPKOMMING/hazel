import React, { Component } from 'react'
import M from 'materialize-css'

export default class CustonForm extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.datepicker');
            var instances = M.Datepicker.init(elems, {});
            var ele = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(ele, {});
          });
        
    }
    
    render() {
        return (
            <div className="container section scrollspy" id='contact' >
                <div className="row">
                    <div className="col s12 l5">
                        <h2 className="indigo-text text-darken-4">Get In Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            veritatis doloribus quasi dolorem reiciendis eos, sint saepe, delectus assumenda corrupti ipsum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            veritatis doloribus quasi dolorem reiciendis eos, sint saepe, delectus assumenda corrupti ipsum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            veritatis doloribus quasi dolorem reiciendis eos, sint saepe, delectus assumenda corrupti ipsum.</p>
                    </div>
                    <div className="col s12 l5 offset-l2">
                        <form action="">
                            <div className="input-field">
                                <i className="material-icons prefix ">mail </i>
                                <input type="email" id="email"/>
                                <label for='email'>Your Email</label>
                            </div>
                            <div className="input-field ">
                            <i className="material-icons prefix ">message </i>
                                <textarea className="materialize-textarea" id="message"></textarea>
                                <label for="message">Yor Message</label>
                            </div>
                            <div className="input-field ">
                            <input type='text' id='date' className='datepicker' />
                                <label for="date">choose a date</label>
                            </div>
                            <div className="input-field ">
                            <p>Services Required</p>
                            <p><label>
                            <input type='checkbox' />
                            <span>Photography</span>
                                </label></p>
                            <p><label>
                            <input type='checkbox' />
                            <span>Editing</span>
                                </label></p>
                            </div>
                            <div className="input-field center">
                                <button className='btn indigo'>Submit</button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
