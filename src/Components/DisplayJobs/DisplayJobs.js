import React from 'react'
import './DisplayJobs.css'

export default function DisplayJobs(props) {
    const { jobs } = props;
    let displayjobs = jobs.map(job =>
        <div className='job-desc-container' key={job.id}>
            <h1>{job.company}</h1>
            <p>{job.title}</p>
        </div>
    )
    return (
        <div>
            Jobs Display
            {displayjobs}
        </div>
    )
}
