import PropTypes from 'prop-types';

export default function WorkForm({ experience, onChange }) {
    return (
        <>
            <div className="form">
                <h2>Experience</h2>
                <input
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={experience.company}
                    onChange={onChange}
                />
                <input
                    name="position"
                    type="text"
                    placeholder="Position"
                    value={experience.position}
                    onChange={onChange}
                />

                <input
                    name="startDate"
                    type="text"
                    placeholder="Start Date"
                    value={experience.startDate}
                    onChange={onChange}
                />
                <input
                    name="endDate"
                    type="text"
                    placeholder="End Date"
                    value={experience.endDate}
                    onChange={onChange}
                />
                <textarea
                    name="jobDesc"
                    type="text"
                    placeholder="Job description"
                    value={experience.jobDesc}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

WorkForm.propTypes = {
    experience: PropTypes.shape({
        position: PropTypes.string,
        company: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        jobDesc: PropTypes.string,
        index: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};
