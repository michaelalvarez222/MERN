import React, {useState} from 'react'


const Pokemon = () => {

    const [allPoke, setAllPokes] = useState([])

    const clickDisShi = ()=>{
        console.log("clicked big bro")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then(poke=>{
            return poke.json()
        })
        .then(poke=>{
            console.log("this is your result")
            console.log(poke) 
            setAllPokes({
                name: poke.results
            })
        })
      //   setAllPokes(poke)
      // })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div>
            <button onClick={clickDisShi}>Show me Pokemon Dammit!</button>
            {
                allPoke.name ? allPoke.name.map((pokemon,idx)=>{
                    return (
                    <div key={idx}>{pokemon.name}</div>
                    )
            }): null
            }

            {/* {
            allPoke.map((pokemon,i)=>{
                return <p key ={i}>hi {pokemon.name}</p>
            })
        } */}
        </div>
    );
};


export default Pokemon;