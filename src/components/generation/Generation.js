import GenSideBar from './GenSideBar'
import { useState, useEffect } from 'react';

const Generation = (props) => {
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
        <>
            {
                isLoading ? (
                    <span>...loading</span>
                ) : (
                    <GenSideBar generation={props.generation} gameNames={gameNames} />
                )
            }
        </>
    )
}

export default Generation