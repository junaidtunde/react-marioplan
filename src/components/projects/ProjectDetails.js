import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="section container project-details">
            <div className="card z-depth-0">
                <div className="card-title">
                    Project Title - {id}
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores itaque ad excepturi, cupiditate ut sapiente fugiat velit voluptatibus odio reprehenderit! Veniam, sed eos magnam tenetur sit modi animi beatae necessitatibus?</p>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Posted by Net Ninja</p>
                    <p>21st of July, 2am</p>
                </div>
            </div>
        </div>
    )
}
