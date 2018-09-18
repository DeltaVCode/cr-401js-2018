import React from 'react';
import List from './pokemon/list.js';
import Detail from './pokemon/detail.js';
import superagent from 'superagent';

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonList: [],
    };
    this.loadPokemonDetails = this.loadPokemonDetails.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async loadPokemonDetails(e) {
    let url = e.target.value;
    console.log('fetching ', url);
    const pokemon = await(this.fetchData(url));
    this.setState(Object.assign(...this.state, {pokemon}));
  }

  componentDidUpdate() {
    //fires every time state changes
    console.log('__STATE__', this.state);
  }

  async componentDidMount() {
    //fires when component mounts, only once at the beginning
    console.log('__STATE__', this.state);
    const data = await (this.loadPokemonList());
    this.setState( Object.assign(...this.state, data));
  }

  async loadPokemonList() {
    const pokeData = await this.fetchData(pokemonAPI);
    let pokemonList = pokeData.results;
    return {pokemonList};
  }

  fetchData(url) {
    return superagent.get(url)
      .then(result => {
        return result.body;
      })
      .catch(console.error);
  }

  async searchPokemon(e) {
    //go find one. in list component:
    // form onSubmit={this.props.searchMethod}
    // add searchMethod={this.searchPokemon} to jsx of the component
  }

  render() {
    return (
      <React.Fragment>
        <List loader={this.loadPokemonDetails} pokemon={this.state.pokemonList} />
        <Detail pokemon={this.state.pokemon} />
      </React.Fragment>
    );
  }
}
