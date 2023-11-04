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
        setExperiences([...experiences, experience]);
        setExperience({
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            jobDesc: '',
            index: uuidv4(),
        });
    }

    function addEducation() {
        setEducations([...educations, education]);
        setEducation({
            degree: '',
            schoolName: '',
            startDate: '',
            endDate: '',
            index: uuidv4(),
        });
    }

    function deleteExperience(deleteIndex) {
        setExperiences(experiences.filter((exp) => exp.index !== deleteIndex));
    }

    function deleteEducation(deleteIndex) {
        setEducations(educations.filter((exp) => exp.index !== deleteIndex));
    }

    return (
        <>
            <div className="cvTemplate">
                <div className="formSection">
                    <InfoForm
                        personalInfo={personalInfo}
                        onChange={onPersonalChange}
                    />
                    <WorkForm
                        experience={experience}
                        onChange={onExperienceChange}
                    />
                    <button onClick={addExperience}>Add Experience</button>
                    <EdForm
                        education={education}
                        onChange={onEducationChange}
                    />
                    <button onClick={addEducation}>Add Education</button>
                </div>
                <div className="templateSection">
                    <InfoTemplate personalInfo={personalInfo} />

                    {experiences.map((exp) => (
                        <WorkTemplate
                            key={exp.index}
                            experience={exp}
                            onDelete={deleteExperience}
                        />
                    ))}

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
