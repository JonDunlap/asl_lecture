import React from 'react';

export default function container(Component) {
  return class DecisionsContainer extends React.Component {
    // the default state
    state = {};

    render() {
      return (
        <Component
          /* pass all other props that are being passed to this component forward */
          {...this.props}
        />
      );
    }
  };
}
