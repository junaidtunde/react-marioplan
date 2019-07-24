const initState = {
    projects: [
        {id: 1, title: 'Finding the eggs', content: 'Blah blah blah'},
        {id: 2, title: 'Jump through the elevator', content: 'Blah blah blah'},
        {id: 3, title: 'Easter eggs Sunday', content: 'Blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            console.log(action.project);
            break;

        default:
            break;
    }
    return state;
}

export default projectReducer
