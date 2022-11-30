import styled from 'styled-components';
import { useState, useEffect } from 'react';

const GenAside = styled.aside`
    background: white;
    border-radius: 20px;
    max-width: 300px;
    box-shadow: 0 0 10px 4px rgba(0,0,0,0.1);
    padding: 10px 20px;
    max-height: 600px;
    overflow-y: scroll;
`

const GenSideBar = (props) => {
    const [gameNames, setGameNames] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            setIsLoading(false);
        });

    }, [props.generation.version_groups])

    return (
        <GenAside>
            <button onClick={() => console.log(props.generation)}>LOG ME</button>
            <div>
                <h2>Main Region: <span>{props.generation.main_region.name}</span></h2>
            </div>
            <div>
                <h2>Game Versions:</h2>
                <ul>
                    {
                        isLoading ? (
                            <span>...loading</span>
                        ) : (
                            gameNames.map((name, id) => (
                                <li key={id}>{name}</li>
                            ))
                        )
                    }
                </ul>
            </div>
            <div>
                <h2>Species:</h2>
                <ul>
                    {
                        props.generation.pokemon_species.map((species, id) => (
                            <li key={id}>{species.name}</li>
                        ))
                    }
                </ul>
            </div>
        </GenAside>
    )
}

export default GenSideBar