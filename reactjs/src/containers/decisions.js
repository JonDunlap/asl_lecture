import React from 'react';
import API from '../API';

export default function container(Component) {
  return class DecisionsContainer extends React.Component {
    // the default state
    state = {
      userDecisions: [],
    };

    // get this user's decisions
    fetchUserDecisions = async () => {
      // get the user decisions from the API
      const userDecisions = await API.get('/decisions');
      // update the state
      this.setState({ userDecisions });
    };

    render() {
      const { userDecisions } = this.state;

      return (
        <Component
          /* pass all other props that are being passed to this component forward */
          {...this.props}
          userDecisions={userDecisions}
          fetchUserDecisions={this.fetchUserDecisions}
        />
      );
    }
  };
}
