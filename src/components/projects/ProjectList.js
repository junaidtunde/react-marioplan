import React from 'react';
import ProjectSummary from './ProjectSummary';

export default function ProjectList({projects}) {
    const SummaryWrapper = projects.length !== 0 ? projects.map(project => {
        return (
            <ProjectSummary project={project} key={project.id} />
        )
    }) : (
        <div className="card">
            <div className="card-content">
                There are no projects at the moment
            </div>
        </div>
    )
    return (
        <div>
            <div className="project-list section">
                {SummaryWrapper}
            </div>
        </div>
    )
}
