
let iD = 0;
export default function reducer (state = [],action){
    switch(action.type){
        case "bugAdded" : 
            return [
                ...state,
                {
                    id: ++iD,
                    description : action.payload.description,
                    resolves : false
                }
            ];
        case "bugRemoved" :
            return state.filter(bug => bug.id != action.payload.id);
        default:
            return state

    }
}

