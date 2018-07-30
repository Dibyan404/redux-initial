// export default function reducer (state,action){
// import reducer from './index';
//     switch(action.type){
//         case "":
//         //dosomething
//         break;
//         case "":
//         //dosomething
//         break;
//         default: 
//         return state;
//     }
// }  
export default (state,action) => {
    // console.log(action);
    switch (action.type){
        case 'SET_TECHNOLOGY':
            return {
                ...state,
                tech: action.tech
            };
        default:  
                return state;
    }
    
}
