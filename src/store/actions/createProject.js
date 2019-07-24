const createProject = (project) => {
    return (dispatch, getState) => {
        // Perform some async function
        dispatch({type: 'ADD_PROJECT', project})
    }
}

export default createProject