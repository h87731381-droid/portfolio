
import { useEffect } from 'react';
import skillsData from '../json/skill.json'

function Skills() {

    useEffect(function () {
        const els = document.querySelectorAll('svg');

        els.forEach(el => {
            const value = el.dataset.progress;
            el.style.setProperty('--progress', value);
        });
    }, [])
    return (
        <div>
            <h1 className='title'>Tech Orbit</h1>

            <div className='S_section'>

                <div className='s_boxAll'>
                    <div className='s_box'>
                        {skillsData.step1.map((skill) => {
                            return (
                                <div className='S_skill_note' key={skill.id}>
                                    <svg width="80" height="80" data-progress={skill.turn}>
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="3" fill="#9DFFFA"/>
                                    </svg>
                                    <span className='S_id'>{skill.id}</span>
                                    <p className='S_text'>{skill.text}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className='s_box'>
                        {skillsData.step2.map((skill) => {
                            return (
                                <div className='S_skill_note' key={skill.id}>
                                    <svg width="80" height="80" data-progress={skill.turn}>
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="3" fill="#9DFFFA"/>
                                    </svg>
                                    <span className='S_id'>{skill.id}</span>
                                    <p className='S_text'>{skill.text}</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className='s_box'>
                        {skillsData.step3.map((skill) => {
                            return (
                                <div className='S_skill_note' key={skill.id}>
                                    <svg width="80" height="80" data-progress={skill.turn}>
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="37" stroke="#9DFFFA" fill="transparent" />
                                        <circle cx="40" cy="40" r="3" fill="#9DFFFA"/>
                                    </svg>
                                    <span className='S_id'>{skill.id}</span>
                                    <p className='S_text'>{skill.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills