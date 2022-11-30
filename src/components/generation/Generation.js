import GenSideBar from './GenSideBar'
import { useState, useEffect } from 'react';
import Loader from '../common/Loader'

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
            setTimeout(function() {
                setIsLoading(false);
            }, 2000)
        });

    }, [props.generation.version_groups])

    return (
        <>
            {
                isLoading ? (
                    <Loader />
                ) : (
                    <GenSideBar generation={props.generation} gameNames={gameNames} />
                )
            }
        </>
    )
}

export default Generation