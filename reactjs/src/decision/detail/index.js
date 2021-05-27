import React from 'react';
import PropTypes from 'prop-types';
import RRPropTypes from 'react-router-prop-types';
import { Link as RRLink } from 'react-router-dom';
import Link from '../../link';
import styles from '../styles.module.css';
import DecisionContainer from '../../containers/decision';

class DecisionDetail extends React.Component {
  componentDidMount() {
    // get the id from the route params
    const {
      fetchDecision,
      match: {
        params: { id },
      },
    } = this.props;
    fetchDecision(id);
  }

  render() {
    const { decision, options } = this.props;

    return (
      <>
        <h1 className={styles.heading}>
          {decision.title}
          <Link url={`/decision/${decision.id}`} />
          <Link
            url={`/admin/decision/edit/${decision.id}`}
            title='Edit'
            icon='fa-edit'
          />
          <Link
            url='/admin/decision/'
            title='Delete'
            icon='fa-trash'
            className='linkSecondary'
          />
        </h1>
        <h2 className={styles.headingSecondary}>Options</h2>
        <ul className={styles.list}>
          {options.map((option) => (
            <li className={styles.list__item} key={option.id}>
              <span className={styles.list__item__title}>{option.value}</span>
              <Link
                url={`/admin/options/edit/${option.id}?decisionId=${decision.id}`}
                title='Edit'
                icon='fa-edit'
              />
            </li>
          ))}
        </ul>
        <RRLink
          to={`/admin/options/new?decisionId=${decision.id}`}
          className={styles.button}
        >
          Add a new option
        </RRLink>
      </>
    );
  }
}

DecisionDetail.propTypes = {
  decision: PropTypes.shape({ title: PropTypes.string, id: PropTypes.string }),
  options: PropTypes.arrayOf(PropTypes.object),
  fetchDecision: PropTypes.func.isRequired,
  match: RRPropTypes.match.isRequired,
};

DecisionDetail.defaultProps = {
  decision: {},
  options: [],
};

export default DecisionContainer(DecisionDetail);
