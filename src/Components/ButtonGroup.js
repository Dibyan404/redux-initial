import React from 'react';
import { store } from './../Store';
import { setTechnology } from './../Actions';

function dispatchBtnAction(e){
    e.preventDefault();
    const tech = e.target.dataset.tech;
    // const tech = this.getTech.value;
    //e.target.dataset.name will get the data attributes set on the button,
    //data-tech Hence, tech will hold the value of the text
    store.dispatch(setTechnology(tech));

}

const ButtonGroup = ({technologies}) => (
    
    <div className = "hello-btns"> 
        {technologies.map((tech,i) => (
            <button 
            type="button"
            data-tech = {tech}
            ref={(input) => this.getTech = input}
            key = {`btn-${i}`}
            className = "hello-btn"
            onClick = {dispatchBtnAction}>
                {tech}
            </button>

        ))}
    </div>
)

// const setTechnology = text => ({type:'SET_TECHNOLOGY',text});



export default ButtonGroup;
