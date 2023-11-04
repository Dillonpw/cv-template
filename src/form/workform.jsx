export default function WorkForm({ experience, onChange }) {
    return (
        <>
            <div>
                <input
                    name="position"
                    type="text"
                    placeholder="Position"
                    value={experience.position}
                    onChange={onChange}
                />
                <input
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={experience.company}
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
                <input
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
