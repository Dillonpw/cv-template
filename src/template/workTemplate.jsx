import PropTypes from 'prop-types';

export default function WorkTemplate({ experience, onDelete }) {
    return (
        <div className="workDisplay">
            <p>{experience.position}</p>
            <p>{experience.company}</p>
            <p>{experience.startDate}</p>
            <p>{experience.endDate}</p>
            <p>{experience.jobDesc}</p>
            <button onClick={() => onDelete(experience.index)}>Delete</button>
        </div>
    );
}

WorkTemplate.propTypes = {
    experience: PropTypes.shape({
        position: PropTypes.string,
        company: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        jobDesc: PropTypes.string,
        index: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
