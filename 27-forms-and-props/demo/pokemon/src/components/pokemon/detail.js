import React from 'react';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let image = this.props.pokemon.sprites
            ? <img src={this.props.pokemon.sprites.front_default} />
            : null
        ;
        return(
            <div>
                <h2>{this.props.pokemon.name}</h2>
                {image}
            </div>
        );
    }
}