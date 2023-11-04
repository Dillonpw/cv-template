export default function InfoForm({
    personalInfo,
    addFirstName,
    addLastName,
    addLocation,
    addEmail,
    addJobtitle,
}) {
    return (
        <>
            <div>
                <input
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={personalInfo.firstName}
                    onChange={addFirstName}
                />
                <input
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={personalInfo.lastName}
                    onChange={addLastName}
                />
                <input
                    name='location'
                    type='text'
                    placeholder='Location'
                    value={personalInfo.location}
                    onChange={addLocation}
                />
                <input
                    name='email'
                    type='text'
                    placeholder='Email'
                    value={personalInfo.email}
                    onChange={addEmail}
                />
                <input
                    name='jobTitle'
                    type='text'
                    placeholder='Current title'
                    value={personalInfo.jobTitle}
                    onChange={addJobtitle}
                />
            </div>
        </>
    );
}
