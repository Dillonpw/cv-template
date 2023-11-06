import PropTypes from 'prop-types'


export default function InfoForm({ personalInfo, onChange }) {
    return (
        <div className='form'>
            <h2>Personal Info</h2>
            <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={personalInfo.firstName}
                onChange={onChange}
            />
            <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={personalInfo.lastName}
                onChange={onChange}
            />
            <input
                name="location"
                type="text"
                placeholder="Location"
                value={personalInfo.location}
                onChange={onChange}
            />
            <input
                name="email"
                type="text"
                placeholder="Email"
                value={personalInfo.email}
                onChange={onChange}
            />
            <input
                name="jobTitle"
                type="text"
                placeholder="Job Title"
                value={personalInfo.jobTitle}
                onChange={onChange}
            />
        </div>
    );
}

InfoForm.propTypes = {
    personalInfo: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        location: PropTypes.string,
        jobTitle: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};
