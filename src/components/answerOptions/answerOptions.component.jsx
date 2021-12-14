import React from "react";

import './answerOptions.styles.scss'

const AnswerOptions = ( {birds} ) => (
    <div className='answer-options'>
        <ul className='answers-group'>
            <li className='answers-item'>
                <span className='circle lost'/>
                {birds[0].name}
            </li>
            <li className='answers-item'>
                <span className='circle won'/>
                {birds[1].name}
            </li>
            <li className='answers-item'>
                <span className='circle'/>
                {birds[2].name}
            </li>
            <li className='answers-item'>
                <span className='circle'/>
                {birds[3].name}
            </li>
            <li className='answers-item'>
                <span className='circle'/>
                {birds[4].name}
            </li>
            <li className='answers-item'>
                <span className='circle'/>
                {birds[5].name}
            </li>
        </ul>
    </div>
)

export default AnswerOptions;