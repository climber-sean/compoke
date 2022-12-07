const Pokemon = (props) => {
    return (
        <div>
            <img src={props.pokemon.sprites.front_shiny} alt={props.pokemon.name} />
            <div>
                <h1>{props.pokemon.name} #{props.pokemon.id < 100 ? '0' + props.pokemon.id : props.pokemon.id }</h1>
                <div>
                    <div>
                        <h2>Base Exp:</h2>
                        <span>{props.pokemon.base_experience}</span>
                    </div>
                    <div>
                        <h2>Types:</h2>
                        <ul>
                            {
                                props.pokemon.types.map(type => {
                                    return (
                                        <li>{type.type.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    {
                        props.pokemon.stats.map(stat => {
                            return (
                                <li>{stat.stat.name}: {stat.base_stat}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Pokemon