import PropTypes from 'prop-types';

export default function EdTemplate({ education, onDelete }) {
    return (
        <>
            <div className="edDisplay">
                <h3>School: {education.schoolName}</h3>
                <p>Degree: {education.degree}</p>
                <p>{education.startDate} - {education.endDate}</p>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(education.index);
                    }}
                >
                    Delete
                </button>
            </div>
        </>
    );
}

EdTemplate.propTypes = {
    education: PropTypes.shape({
        degree: PropTypes.string,
        schoolName: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        index: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
