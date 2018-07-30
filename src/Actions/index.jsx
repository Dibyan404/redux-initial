// const react = {
//     type: 'SET_TECHNOLOGY',
//     text: 'React'
// }

// const redux = {
//     type: 'SET_TECHNOLOGY',
//     text: 'React-redux'
// }

// const elm = {
//     type: 'SET_TECHNOLOGY',
//     text: 'Elm'
// }



// function setTechnology (text){
//     return{
//         type: 'SET_TECHNOLOGY',
//         text: text
//     }
// }

// refactoring using es6
export const setTechnology = tech => ({
    type:'SET_TECHNOLOGY',
    tech
});