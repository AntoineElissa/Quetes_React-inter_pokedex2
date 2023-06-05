import { useState } from "react"
import './CardSpec.scss'

function CardSpec ({pokemons, isDisplay}) {



    return (

    <div className="wrap-attacks" >


    <div className = "Card-desc">
        <h2> Description </h2>
        <span className="Card-desc-text"> {pokemons.desc} </span>
    </div>

    <div className="Card-atouts">
        <div className="faiblesse"> Faiblesse : &nbsp; <b>{pokemons.faiblesse}</b></div>
        <div className="Resistance"> Résistance : &nbsp; <b>{pokemons.resistance}</b></div>
    </div>

       
    <div className = "Card-attacks">

        {pokemons.attacks.map((elem, index) => {
            
            return (
                <div key={index} className="attacks" >
                    <div className="attacks-number"> Attack {index+1} </div>
                        <div className="attacks-type">
                        <span className="attaks-name"> {elem.name} </span>
                        <span className="attaks-degat"> {elem.degat} </span>
                    </div>
                    <div className="attacks-desc">
                        <span> {elem.desc} </span>
                    </div>
                </div>
            )
        })}
    
    </div>

    </div>


            )
}


   export default CardSpec;


