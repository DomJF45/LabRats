import React from 'react'
import { useParams } from 'react-router-dom'
import { projectData } from './testData';

const Project = () => {

  let { projectId } = useParams();

  const project = projectData.find(proj => {
    return proj.id === projectId;
  });

  console.log(projectData);

  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.assignedTo}</h2>
    </div>
  )
}

export default Project