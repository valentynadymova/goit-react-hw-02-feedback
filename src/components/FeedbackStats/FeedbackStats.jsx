import PropTypes from 'prop-types';
import {StatList, StatItem, StatValues} from './FeedbackStats.styled';

export default function FeedbackStats(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return (
      <StatList>
        <StatItem>
          <StatValues>Good: {good} </StatValues>
        </StatItem>
        <StatItem>
          <StatValues>Neutral: {neutral} </StatValues>
        </StatItem>
        <StatItem>
          <StatValues>Bad: {bad} </StatValues>
        </StatItem>
        <StatItem>
          <StatValues>Total: {total} </StatValues>
        </StatItem>
        <StatItem>
          <StatValues>Positive feedbacks: {positivePercentage} </StatValues>
        </StatItem>
      </StatList>
    );
  }
  
  FeedbackStats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };