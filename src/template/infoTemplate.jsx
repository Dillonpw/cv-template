export default function InfoTemplate({ personalInfo }) {
    return (
        <div className="infoDisplay">
            <p>{personalInfo.firstName}</p>
            <p>{personalInfo.lastName}</p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.location}</p>
            <p>{personalInfo.jobTitle}</p>
        </div>
    );
}
