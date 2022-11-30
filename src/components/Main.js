import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Generation from './Generation';
import styled from 'styled-components';

const StyledMain = styled.main`
    max-width: 1420px;
    margin: 0 auto;
`

const Main = () => {
    const [generations, setGenerations] = useState({});
    const [currGen, setCurrGen] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showGeneration, setShowGeneration] = useState(false)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/generation/')
            .then((response) => response.json())
            .then((data) => {
                setGenerations({...data});
                setIsLoading(false);
            });
    }, []);

    function fetchGeneration(gen) {
        setShowGeneration(false);
        fetch(`https://pokeapi.co/api/v2/generation/${gen}`)
            .then((response) => response.json())
            .then((data) => {
                setCurrGen({...data});
                setShowGeneration(true);
            });
    }

    return (
        <StyledMain>
            {isLoading ? (
                <span>Is Loading...</span>
            ) : (
                <Navigation click={fetchGeneration} data={generations} />
            )}

            {!showGeneration ? (
                <p>Select a Generation</p>
            ) : (
                <Generation generation={currGen} />
            )}
        </StyledMain>
    );
};

export default Main