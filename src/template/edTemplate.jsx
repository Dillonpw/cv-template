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
