import React, { useEffect, useState } from 'react'
import projects from '../json/popup.json'
import projectList from '../json/projectList.json'

function Project() {
    const [show, setShow] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        document.body.style.overflow = (show ? 'hidden' : 'auto' );
    },[show]);

    return (
        <div className='P_list'>
            <h1 className='title'>Project</h1>

            <div className='P_thumbList'>

                {projectList.map((pjList)=>{
                    return (
                        <div className='P_listOne' key={pjList.id}>
                            <img className='P_thumbnail' src={pjList.photo} alt="" />
                            <div className='P_hover'>
                                <div className='P_data'>
                                    <p className='P_name'>{pjList.name}</p>
                                    <p className='P_tool'>{pjList.type}</p>
                                    <p><a className='P_link' onClick={() => {setSelectedId(pjList.id); setShow(true);}}>Free View</a></p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <Popup setShow={setShow} show={show} selectedId={selectedId} />

        </div>

    )
}

export default Project;



function Popup({ show, setShow, selectedId }) {

    const pj = projects.find(
        project => project.id === selectedId
    );

    if (!pj) return null;

    return (
        <>
            {show &&
                <div className='popup'>

                    <img
                        className='X'
                        src="meteor-icons_xmark.svg"
                        onClick={() => setShow(false)}
                    />

                    <div className='popup_back'>
                        <div className='X_back'>

                            <div>

                                <div className='ppp_title'>
                                    <div className='ppp_title_github'>
                                        <h1>{pj.title}</h1>

                                        <a
                                            href={pj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img src="github.svg" alt="" />
                                        </a>
                                    </div>

                                    <img
                                        className='ppp_img'
                                        src={pj.img}
                                        alt=""
                                    />
                                </div>

                                <div className='ppp_data'>
                                    <p>{pj.detail}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            }
        </>
    )
}