import React from 'react';

export default class list extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('About to render list', this.props);
        return(
            <div className="pokemonList">
                <form>
                    <input placeholder="Search..." />
                </form>
                <form>
                    {
                        this.props.pokemon.map( (pokemon, i) =>
                            <div key={i}>
                                <input
                                    onChange={this.props.loader}
                                    type="radio"
                                    id={pokemon.name}
                                    name="pokemon"
                                    value={pokemon.url} //object
                                />
                                <label htmlFor={pokemon.name}>
                                    {pokemon.name}
                                </label>
                            </div>
                        )
                    }
                </form>
            </div>
        );
    }
}