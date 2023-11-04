export default function EdTemplate({ education }) {
    return (
        <div className="edDisplay">
            <p>{education.degree}</p>
            <p>{education.schoolName}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
        </div>
    );
}
