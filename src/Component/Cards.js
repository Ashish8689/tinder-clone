import React,{useState,useEffect} from 'react';
import './style.css'
import TinderCard from 'react-tinder-card';
import axios from './axios';


function Cards() {
const[persons,setperson] = useState([]);

  useEffect(() => {
      
    async function fetchdata(){
        const req = await axios.get('/tinder/cards');
        setperson(req.data);
    }
    fetchdata();
   },[]);

   console.log(persons);


  const swiped = (direction,nameToDelete) => {
    console.log('Removing: ' + nameToDelete );
  }
   
  const outofFrame = (name) => {
    console.log(name + ' left the screen')
  }

    return (
        <div className="tinder-cards">

            {persons.map(person =>{

            return <TinderCard 
                        className="swipe"
                        key={person.name}
                        onSwipe={(dir)=>swiped(swiped,person.name)} 
                        onCardLeftScreen={(name) => outofFrame(person.name)} 
                        preventSwipe={['up', 'down']}
                        >

                        <div className="card">
                            <img src={person.imgUrl} alt="cards-image"/>
                            <h1>{person.name}</h1>
                        </div>
                    </TinderCard>
                    
            })}

        </div>
    )
}

export default Cards
