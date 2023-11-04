export default function InfoForm({ personalInfo, onChange }) {
    return (
        <div>
            <input
                name='firstName'
                type='text'
                placeholder='First Name'
                value={personalInfo.firstName}
                onChange={onChange}
            />
            <input
                name='lastName'
                type='text'
                placeholder='Last Name'
                value={personalInfo.lastName}
                onChange={onChange}
            />
            <input
                name='location'
                type='text'
                placeholder='Location'
                value={personalInfo.location}
                onChange={onChange}
            />
            <input
                name='email'
                type='text'
                placeholder='Email'
                value={personalInfo.email}
                onChange={onChange}
            />
            <input
                name='jobTitle'
                type='text'
                placeholder='Job Title'
                value={personalInfo.jobTitle}
                onChange={onChange}
            />
        </div>
    );
}
