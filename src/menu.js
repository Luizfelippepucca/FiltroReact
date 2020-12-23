import React from 'react';


const Card = (props)=>{
 
  return(
    <div className='Card'>
        <img  src={props.img} alt='Avatar'/>
        <div className='Infos'>
          <div className='Name'>Nome: {props.name} </div>
          <div className='Age'>Idade: {props.age}</div>
          <div className='Anime'>Anime: {props.anime}</div>
          <div className='Anime'>Cantor: {props.cantor}</div>
          <p>{props.children}</p>
          {props.video}
      
        </div>
    </div>
  )
}


export default Card;