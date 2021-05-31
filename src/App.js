import { useState } from 'react'
import JobsCount from './Components/JobsCount/JobsCount'
import AddJob from './Components/AddJob/AddJob'
import DisplayJobs from './Components/DisplayJobs/DisplayJobs'
import './App.css';

function App() {
  const [jobs, setJobs] = useState([
    { title: 'Web Developer', company: 'Pathrise', id: 1 },
    { title: 'Data Analyst', company: 'Google', id: 2 }
  ])
  return (
    <div className="App">
      <h2>WISHLIST</h2>
      <JobsCount jobs={jobs} /> <br />
      {/* Component to add to list of jobs */}
      <AddJob />
      {/* Component to display list of jobs */}
      <DisplayJobs jobs={jobs} />
    </div>
  );
}

export default App;
