import React from 'react'

export default function ProjectSummary({project}) {
    return (
        <div>
            <div className="card project-summary z-depth-0">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted by Net Ninja</p>
                    <p className="grey-text">21st of July, 2am</p>
                </div>
            </div>
        </div>
    )
}
