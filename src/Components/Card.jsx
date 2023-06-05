import './Card.scss'
import ReactStars from 'react-stars'
import { useState } from 'react'
import CardSpec from './CardSpec'
import './CardSpec.scss'


function Card({pokemons}) {

    const [isDisplay, setDisplay] = useState(false); 

    console.log(isDisplay);
    
    const handleDescDisplay = (e) => {

        

        const wrapImageDesc = e.target.previousSibling;

        if(!isDisplay){
            wrapImageDesc.style.display = 'none';
        } else {
            wrapImageDesc.style.display = 'flex';
        }

        setDisplay(!isDisplay);
    }
      
    

    return(

    <div className="Card-Pokemon">

        <div className="wrap-content-global">

        <div className="wrap-ImageDesc">
        
            <div className="Card-pic">
                <img src={pokemons.imgSrc} alt={pokemons.name}></img>
            </div>

            <div className="Card-name">
                <h1> {pokemons.name} </h1>
            </div>

            <div className = "Card-rate">
                <div className="Left">
                <ReactStars count={5} value={pokemons.rate} size={24} />
                <span> {pokemons.rate}/5 </span>
                </div>
                <div className="Rigth">
                    <span> Level  {pokemons.niveau} </span>
                </div>
            </div>

        </div>

        <div className = "Card-Separator" onClick={handleDescDisplay}></div>
        {isDisplay && <CardSpec pokemons={pokemons} isDisplay={isDisplay} /> }
        </div>

              

    </div>

        




        
   


    )
}

export default Card
