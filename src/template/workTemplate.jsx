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
