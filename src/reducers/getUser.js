const initial={
    users:[]
}

const getData=(state=initial,action)=>{
    switch(action.type){
        case 'GET_DATA':
                return{ ...state, 
                    users:action.payload
                }
        default:
            return state;
    }
}

export default getData;