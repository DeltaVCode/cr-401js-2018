import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import CategoryForm from '../category-form';

class HomeContainer extends React.Component {
  render() {
    const { categories, categoryAdd } = this.props;

    return (
      <React.Fragment>
        <CategoryForm
          handleComplete={categoryAdd}
          />

        <ul>
          {/* this should be its own component! */}
          {categories.map(cat => (
            <li key={cat._id}>
              {cat.title}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
}

const mapDispatchToProps = (dispatch) => ({
  categoryAdd: (category) => dispatch({
    type: 'CATEGORY_ADD',
    //payload: { _id: uuid(), category }, // => { _id: '...', category: { title: 'whatever' } }
    payload: { _id: uuid(), ...category }, // => { _id: '...', title: 'whatever' }
  }),
});

var connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(HomeContainer);
