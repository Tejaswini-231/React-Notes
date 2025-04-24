import React, { useState } from 'react';

function AdvLists() {
    const [id, setId] = useState("");
    const [persons, setPersons] = useState([]); 
    const [year, setYear] = useState(new Date().getFullYear());
    const [job, setJob] = useState("");
    const [course, setCourse] = useState("");

    function addPerson() {
        const newEmp = { 
            idnum: id,
            yearPassed: year,
            jobRole: job,
            courseDone: course
        };
        
        setPersons([...persons, newEmp]); 
        setId(0);
        setCourse("");
        setJob("");
        setYear(new Date().getFullYear());
    }

    function removePerson(index) { 
        setPersons(persons.filter((_, i) => i !== index)); 
    }

    const handleId = (event) => setId(Number(event.target.value));
    const handleYearChange = (event) => setYear(Number(event.target.value));
    const handleJobRole = (event) => setJob(event.target.value);
    const handleCourseChange = (event) => setCourse(event.target.value);

    return (
        <div>
            <h4>List of interviewees</h4>
            <ul>
                {persons.map((emp, idx) => (
                    <li key={emp.idnum} onClick={() => removePerson(idx)}>
                        {emp.idnum} - {emp.courseDone} - {emp.yearPassed} - {emp.jobRole}
                    </li>
                ))}
            </ul>
                <br/>
            <input type="number" value={id} onChange={handleId} placeholder="ID" /> <br/> <br/>
            <input type="text" value={course} placeholder="Course Done" onChange={handleCourseChange} /> <br/> <br/>
            <input type="number" value={year} placeholder="Year Passed" onChange={handleYearChange} /> <br/> <br/>
            <input type="text" value={job} placeholder="Job Role Applied for" onChange={handleJobRole} /> <br/> <br/>
            <button onClick={addPerson}>Add Person</button>
        </div>
    );
}

export default AdvLists;