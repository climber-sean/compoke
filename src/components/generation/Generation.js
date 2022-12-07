import GenSideBar from './GenSideBar'
import { useState, useEffect } from 'react';
import Loader from '../common/Loader'
import GenCompare from './GenCompare';
import { GenContainer } from './styled/Generation.styled';


const Generation = (props) => {
    const [gameNames, setGameNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [firstPokemon, setFirstPokemon] = useState({});
    const [secondPokemon, setSecondPokemon] = useState({});
    const [pokemonSelected, setPokemonSelected] = useState(false);
    const [pokemonTwoSelected, setPokemonTwoSelected] = useState(false);

    useEffect(() => {
        setGameNames([]);
        let URLS = [];
        props.generation.version_groups.map(ver => (
            URLS.push(ver.url)
        ));

        Promise.all(URLS.map(url => (
            fetch(url).then(resp => resp.json()).then(data => {
                data.versions.map(ver => (
                    setGameNames(gameNames => [...gameNames, ver.name.replace(/-/g, ' ')])
                ))
            })
        ))).then(() => {
            setTimeout(function() {
                setIsLoading(false);
            }, 2000)
        });

    }, [props.generation.version_groups])

    function getPokemon(event, pokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(resp => resp.json())
            .then((data) =>  {
                if (!event.shiftKey) {
                    setFirstPokemon({...data})
                    setPokemonSelected(true);
                    return
                }
                setSecondPokemon({...data});
                setPokemonTwoSelected(true);
            })
    }

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <GenContainer>
                        <GenSideBar generation={props.generation} gameNames={gameNames} click={getPokemon}/>
                        <GenCompare pokemon={firstPokemon}
                            secondPokemon={secondPokemon}
                            selected={pokemonSelected}
                            selectedTwo={pokemonTwoSelected}
                        />
                    </GenContainer>
                )
            }
        </>
    )
}

export default Generation