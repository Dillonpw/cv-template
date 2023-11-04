import PropTypes from 'prop-types';

export default function EdTemplate({ education, onDelete }) {
    return (
        <div className="edDisplay">
            <p>{education.degree}</p>
            <p>{education.schoolName}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
            <button onClick={() => onDelete(education.index)}>Delete</button>
        </div>
    );
}

EdTemplate.propTypes = {
    education: PropTypes.shape({
        degree: PropTypes.string,
        schoolName: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        index: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
