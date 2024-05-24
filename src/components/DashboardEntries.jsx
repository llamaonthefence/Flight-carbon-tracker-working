
import DashboardEntry from './DashboardEntry';
import PropTypes from 'prop-types';

function DashboardEntries({ entries }) {
  return (
    <div>
      {entries.map((entry, index) => (
        <DashboardEntry key={index} entry={entry} />
      ))}
    </div>
  );
}

DashboardEntries.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.object).isRequired, 
};

export default DashboardEntries;
