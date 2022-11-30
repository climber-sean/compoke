import { GenAside } from './styled/Generation.styled';

const GenSideBar = (props) => {
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
                        props.gameNames.map((name, id) => (
                            <li key={id}>{name}</li>
                        ))
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