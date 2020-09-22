import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import Nav from './contents/Nav'
import Section from './contents/Section'
import Parallax from './contents/Parallax'
import CustonForm from './contents/CustonForm'
import Tabs from './contents/Tabs'
import Footer from './contents/Hero'
import Button from './contents/Button'

import './App.scss'
import src1 from './img/pic2.jpg'
import src2 from './img/pic5.jpg'


function App() {
  return (
    <>
    <Nav/>
    <Section/>
    <Button/>
    <Parallax src={src1}/>
    <Tabs/>
    <Parallax src={src2}/>
    <CustonForm/>
    <Footer/>
    </>
  );
}

export default App;
