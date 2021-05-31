import { useState, useEffect } from 'react'

export default function JobsCount(props) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        getCount()
    }, [count])

    const getCount = (jobsArray) => {
        const { jobs } = props
        let count = jobs.length
        setCount(count)
    }

    return (
        <div>
            {count} Jobs
        </div>
    )
}
