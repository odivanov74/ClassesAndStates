import logo from '../logo.svg';
import React from 'react';
import Hello from '../hello/Hello';
import Length from '../length/Length';
import Form from '../form/Form';
import Range from '../range/Range';
import Posts from '../posts/Posts';

import './App.css';


class App extends React.Component
{

  state = 
  {
    posts:
    [
      {id:"1", name:"C++ Basics", title:"Процедурное программирование на языке C++"},
      {id:"2", name:"C++ OOP", title:"Объектно-ориентированное программирование на языке С++"},
      {id:"3", name:"Windows via C/C++", title:"Разработка Windoes приложений на языке С++"},
    ]
  }
      render() {
      

        return ( 
          <>
            {/* <Hello name = "Alex"/>
            <Length/>
            <Form/>
            <Range/> */}
            <Posts posts = {this.state.posts}/>
          </>
        );
      }
}


export default App;
