import React, {Component} from 'react';
import Card from './menu.js';

const dataAnimes = [
{
  img:'https://i.pinimg.com/originals/9e/5c/9d/9e5c9dc33e05874e2a6a8cd8943e319e.png',
  name:'Ray',
  age: 12,
  anime:'Promise Neverland',
  cantor:'Enygma',
  video:<iframe title='ray' width="230" height="130" src="https://www.youtube.com/embed/GmtifXi2zHY"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />,
  id:'01'
},
{
img:'https://i.imgur.com/TWDR4d7.png',
name:'Emma',
age: 11,
anime:'Promise Neverland',
cantor:'D.Y.A',
video: <iframe  title='emma' width="230" height="130" src="https://www.youtube.com/embed/c0jE8lLmN0k"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />,
id:'02'
},

{
img:'https://i.pinimg.com/originals/36/21/4a/36214ab653998f54afcdd944ee693970.png',
name:'Norman',
age: 11,
anime:'Promise Neverland',
cantor:'Ishida',
video: <iframe title='normam' width="230" height="130" src="https://www.youtube.com/embed/sMtfUSgFGRI" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />,
id:'03'
},
{
img:'https://i.pinimg.com/originals/9e/5c/9d/9e5c9dc33e05874e2a6a8cd8943e319e.png',
name:'Ray',
age: 12,
anime:'Promise Neverland',
cantor:'Anirap',
video:<iframe title='ray'width="230" height="130" src="https://www.youtube.com/embed/yzg6WV1oFbs"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>,
id:'04'
},

{
img:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce33d7dc-eeb1-4900-be73-3c00611e37af/ddl3css-c0c88636-ad13-4ac4-9e24-06105fcb4619.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvY2UzM2Q3ZGMtZWViMS00OTAwLWJlNzMtM2MwMDYxMWUzN2FmXC9kZGwzY3NzLWMwYzg4NjM2LWFkMTMtNGFjNC05ZTI0LTA2MTA1ZmNiNDYxOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.daGjiqqJXVWLE9Ul0wIy_5gezsp2YMvS6m807cIpJB4',
name:'Tatsumi',
age: 16,
anime:'Akame Ga Kill',
cantor:'Micael',
video: <iframe title='tatsumi'width="230" height="130" src="https://www.youtube.com/embed/MwoMTCtAclc"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
id:'05'
},
{
img:'https://img.favpng.com/4/6/6/ken-kaneki-tokyo-ghoul-t-shirt-png-favpng-CL6eZB6jGMsHGXqtNVgw2JLXQ.jpg',
name:'Kaneki',
age: 23,
anime:'Tokyo-ghoul',
cantor:'Anirap',
video:<iframe title='kaneki'width="230" height="130" src="https://www.youtube.com/embed/xQKvcXq77lI"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>,
id:'06'
}



]


class App extends Component{
state = {
   infosAnime:[...dataAnimes],
   showcard:false,
   estadoInput:''

}

filtrar = (valor) =>{
  
    if(this.state.showcard === true){
      this.setState({estadoInput:valor})
      const result =  dataAnimes.filter((name,index)=>{
        if(name.name === valor){
          
          return name
        }else if(valor === ''){
             return this.state.estadoInput;
        }
      })
      this.setState({infosAnime:result})


    }
   
}
     

 mostarCard = () =>{
 
 this.setState({showcard:!this.state.showcard})
}

render(){
  const styleBTn = {
    margin:'20px'
  }

  let Persons = null;

  if(this.state.showcard === true){
    Persons = (
      <div>
         {this.state.infosAnime.map((person,index)=>{
             return <Card name={person.name} age={person.age} img={person.img} anime={person.anime} key={person.id} cantor={person.cantor} video={person.video} >Ano:2019</Card>
         })}

      </div>
    );
  }


  
 
  return(
    <div className='App'>
      <div className='filtro'>
        <input type='text'  placeholder='nome personagem' value={this.state.estadoInput} onChange={(e)=>this.filtrar(e.target.value)}/>
          <button type='button'onClick={this.mostarCard} style={styleBTn}>{
            this.state.showcard?'Esconder ':'Mostrar '}
          </button>
      </div>
     
      {Persons}
    </div>
  )
}
}

export default App;
