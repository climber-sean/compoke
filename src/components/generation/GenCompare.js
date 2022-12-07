import { useEffect } from "react"
import Pokemon from '../pokemon/Pokemon';

const GenCompare = (props) => {
    useEffect(() => {
        console.log(props.pokemon)
    })

    return (
        <>
        {
            props.selected ? (
                <Pokemon pokemon={props.pokemon} />
            ) : (
                <span> SELECT A POKEMON </span>
            )
        }

        {
            props.selectedTwo ? (
                <Pokemon pokemon={props.secondPokemon} />
            ) : (
                <span> SHIFT CLICK TO SELECT SECOND POKEMON </span>
            )
        }
        </>
    )
}

export default GenCompare