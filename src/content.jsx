import { useState } from 'react';
import InfoForm from './form/infoform';

export default function Content() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'Johndoe10@email.com',
        location: 'Austin, TX',
        jobTitle: 'Web Developer',
    });

    /*const [experience, setExperience] = useState({
        position: 'Teacher',
        company: 'Code Academy',
        startDate: 'July 2020',
        endDate: 'Current',
        jobDesc: 'Taught students programming language fundamentals',
        index: uuidv4(),
    });

    const [education, setEducation] = useState({
        degree: 'B.S. in Computer Science',
        schoolName: 'Harvard University',
        startDate: 'sept 2016',
        endDate: 'June 2020',
        index: uuidv4(),
    });*/

    function onPersonalChange(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value,
        });
    }
    /* function onExperienceChange(e) {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value,
        });
    }

    function onEducationChange(e) {
        setEducation({
            ...education,
            [e.target.name]: e.target.value,
        });
    }*/

    return (
        <>
            <div className="cvTemplate">
                <div className="personalSection">
                    <InfoForm
                        personalInfo={personalInfo}
                        addFirstName={onPersonalChange}
                        addLastName={onPersonalChange}
                        addLocation={onPersonalChange}
                        addEmail={onPersonalChange}
                        addJobtitle={onPersonalChange}
                    ></InfoForm>
                    <div className="personalInfoDisplay">
                        <p>{personalInfo.firstName}</p>
                        <p>L{personalInfo.lastName}</p>
                        <p>{personalInfo.email}</p>
                        <p>{personalInfo.location}</p>
                        <p>{personalInfo.jobTitle}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
