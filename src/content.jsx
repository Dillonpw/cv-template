import { useEffect, useState } from 'react';
import InfoForm from './form/infoform';
import EdForm from './form/edform';
import WorkForm from './form/workform';
import InfoTemplate from './template/infoTemplate';
import EdTemplate from './template/edTemplate';
import WorkTemplate from './template/workTemplate';
import { v4 as uuidv4 } from 'uuid';

export default function Content() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'Johndoe10@email.com',
        location: 'Austin, TX',
        jobTitle: 'Web Developer',
    });

    const [experiences, setExperiences] = useState([]);
    const [experience, setExperience] = useState({
        position: 'Teacher',
        company: 'Code Academy',
        startDate: 'July 2020',
        endDate: 'Current',
        jobDesc: 'Taught students programming language fundamentals',
        index: uuidv4(),
    });

    const [educations, setEducations] = useState([]);
    const [education, setEducation] = useState({
        degree: 'B.S. in Computer Science',
        schoolName: 'Harvard University',
        startDate: 'sept 2016',
        endDate: 'June 2020',
        index: uuidv4(),
    });

    useEffect(() => {
        setExperiences([experience]);
        setEducations([education]);
    }, []);

    function onPersonalChange(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value,
        });
    }
    function onExperienceChange(e) {
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
    }

    function addExperience() {
        const newExperience = { ...experience, index: uuidv4() };
        setExperiences([...experiences, newExperience]);
        setExperience({
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            jobDesc: '',
        });
    }

    function addEducation() {
        const newEducation = { ...education, index: uuidv4() };
        setEducations([...educations, newEducation]);
        setEducation({
            degree: '',
            schoolName: '',
            startDate: '',
            endDate: '',
        });
    }

    function deleteExperience(deleteIndex) {
        console.log('Trying to delete:', deleteIndex);
        setExperiences((experiences) =>
            experiences.filter((exp) => exp.index !== deleteIndex)
        );
    }

    function deleteEducation(deleteIndex) {
        console.log('Trying to delete:', deleteIndex);
        setEducations((educations) =>
            educations.filter((ed) => ed.index !== deleteIndex)
        );
    }

    return (
        <>
            <div className="cvTemplate">
                <div className="formSection">
                    <div className="infoFormBox">
                        <InfoForm
                            personalInfo={personalInfo}
                            onChange={onPersonalChange}
                        />
                    </div>
                    <div className="workFormBox">
                        <WorkForm
                            experience={experience}
                            onChange={onExperienceChange}
                        />
                        <button onClick={addExperience}>Add Experience</button>
                    </div>
                    <div className="edFormBox">
                        <EdForm
                            education={education}
                            onChange={onEducationChange}
                        />
                        <button onClick={addEducation}>Add Education</button>
                    </div>
                    <button onClick={() => window.location.reload()}>
                        Reset
                    </button>
                </div>
                <div className="templateSection">
                    <InfoTemplate personalInfo={personalInfo} />
                    <h2>
                        <u>Professional</u>
                    </h2>

                    {experiences.map((exp) => (
                        <WorkTemplate
                            key={exp.index}
                            experience={exp}
                            onDelete={deleteExperience}
                        />
                    ))}
                    <h2>
                        <u>Education</u>
                    </h2>

                    {educations.map((ed) => (
                        <EdTemplate
                            key={ed.index}
                            education={ed}
                            onDelete={deleteEducation}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
