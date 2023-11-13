import PropTypes from 'prop-types'


export default function EdForm({ education, onChange }) {
    return (
        <>
        
            <div className='form'>
            <h2>Education</h2>
                <input
                    name="degree"
                    type="text"
                    placeholder="Degree"
                    value={education.degree}
                    onChange={onChange}
                />
                <input
                    name="schoolName"
                    type="text"
                    placeholder="School Name"
                    value={education.schoolName}
                    onChange={onChange}
                />
                <input
                    name="startDate"
                    type="text"
                    placeholder="Start Date"
                    value={education.startDate}
                    onChange={onChange}
                />
                <input
                    name="endDate"
                    type="text"
                    placeholder="End Date"
                    value={education.endDate}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

EdForm.propTypes = {
    education: PropTypes.shape({
        degree: PropTypes.string,
        schoolName: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        index: PropTypes.string.isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};