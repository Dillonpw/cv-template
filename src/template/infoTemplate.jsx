import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

export default function InfoTemplate({ personalInfo }) {
    return (
        <div className="infoDisplay">
            <h2 id="name">
                {personalInfo.firstName} {personalInfo.lastName}{' '}
            </h2>
            <p id="email">
                <FontAwesomeIcon icon={faEnvelope} /> {personalInfo.email}
            </p>
            <h3 id="currentJob">{personalInfo.jobTitle}</h3>
            <p id="location">
                <FontAwesomeIcon icon={faMapPin} /> {personalInfo.location}
            </p>
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
