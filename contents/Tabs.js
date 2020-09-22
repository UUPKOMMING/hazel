import React, { Component } from 'react'
import M from 'materialize-css'

export default class Tabs extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var el = document.querySelectorAll('.tabs');
            var instance = M.Tabs.init(el, {});
            var ele = document.querySelectorAll('.scrollspy');
            var instances = M.ScrollSpy.init(ele, {});
        });

    }
    
    render() {
        return (
            <div>
                <div className="container section scrollspy" id="services">
                    <div className="row">
                        <div className="col s12 l4 ">
                            <h2 className="indigo-text text-darken-5">What I Do ...</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                        </div>
                        <div className="col s12 l6 offset-l2">
                            <ul className="tabs">
                                <li className="tab col s6">
                                    <a href="#photogragy" className="indigo-text text-darken-4">photogragy</a>
                                </li>
                                <li className="tab col s6">
                                    <a href="#Editing" className="indigo-text text-darken-4">Editing</a>
                                </li>
                            </ul>
                            <div className="col s12" id="photogragy">
                                <p className="flow-text indigo-text text-darken-4">photogragy</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                            </div>
                            <div className="col s12" id='Editing'>
                                <p className="flow-text indigo-text text-darken-4">Editing</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, rem?
                                 doloremque quo. Reprehenderit, necessitatibus mollitia?</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
