import React, {Component} from 'react';
import './App.css';
import Customer from './components/customer.js'

const customers = [{
  'name':'홍길동',
  'img':'http://placeimg.com/64/64/1',
  'id':'1',
  'birthday':'010206',
  'gender':'남자',
  'job':'학생'
},
{
  'name':'이순신',
  'img':'http://placeimg.com/64/64/2',
  'id':'2',
  'birthday':'991212',
  'gender':'남자',
  'job':'군인'
},
{
  'name':'신사임당',
  'img':'http://placeimg.com/64/64/3',
  'id':'3',
  'birthday':'010101',
  'gender':'여자',
  'job':'주부'
},
];

class App extends React.Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                img={c.img}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
              )
          })
        }
      </div>
    );
  };
};

export default App;
