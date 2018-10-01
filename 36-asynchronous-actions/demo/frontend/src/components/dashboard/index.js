import React from 'react';
import { connect } from 'react-redux';

class DashboardContainer extends React.Component {
  render() {
    const { lists } = this.props;

    if (!lists) {
      return (
        <h2>Loading...</h2>
      );
    }

    return (
      <ul>
        {lists.map(list => (
          <li key={list._id}>{list.name}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
