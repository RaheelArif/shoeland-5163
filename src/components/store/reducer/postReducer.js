const initState = {
posts: [
    {id: 1, title: 'shoes', detail: 'best shoes ever', price: 1999},
    {id: 2, title: 'shoes2', detail: 'best shoes never', price: 1998},
    {id: 3, title: 'shoes3', detail: 'best shoes never  ever', price: 1997}  
]
}

const postReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_POST':
        console.log('post created', action.post)
        return state
        case 'CREATE_POST_ERROR':
        console.log('create project error', action.err)
        break;
        default:
        return state;

        
    }
    
}
export default postReducer;