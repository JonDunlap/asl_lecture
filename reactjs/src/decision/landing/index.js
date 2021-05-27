import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles.module.css';
import Link from '../../link';
import DecisionsContainer from '../../containers/decisions';

class Landing extends React.Component {
  componentDidMount() {
    const { fetchPublicDecisions } = this.props;
    fetchPublicDecisions();
  }

  render() {
    const { publicDecisions } = this.props;

    return (
      <>
        <h1 className={styles.heading}>Public Decisions</h1>
        <ul className={styles.list}>
          {publicDecisions.map((decision) => (
            <li className={styles.list__item} key={decision.id}>
              <span className={styles.list__item__title}>{decision.title}</span>
              <Link url={`/decisions/${decision.id}`} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Landing.propTypes = {
  publicDecisions: PropTypes.arrayOf(PropTypes.object),
  fetchPublicDecisions: PropTypes.func.isRequired,
};

Landing.defaultProps = {
  publicDecisions: [],
};

export default DecisionsContainer(Landing);