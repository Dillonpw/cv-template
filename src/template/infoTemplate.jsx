import PropTypes from 'prop-types';

export default function InfoTemplate({ personalInfo }) {
    return (
        <div className="infoDisplay">
            <p>{personalInfo.firstName} {' '} {personalInfo.lastName} </p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.location}</p>
            <p>{personalInfo.jobTitle}</p>
        </div>
    );
}

InfoTemplate.propTypes = {
    personalInfo: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        location: PropTypes.string,
        jobTitle: PropTypes.string,
    }).isRequired,
};
