import React, { useEffect, useState } from 'react'
import projects from '../json/popup.json'
import projectList from '../json/projectList.json'

function Project() {
    const [show, setShow] = useState(false);

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
                                    <p><a className='P_link' onClick={() => setShow(true)}>Free View</a></p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>

            <Popup setShow={setShow} show={show} />

        </div>

    )
}

export default Project;



function Popup({ show, setShow }) {


    return (
        <>
            {show &&
                <div className='popup'>
                    <div className='popup_back'>
                        <div className='X_back'>
                            <img className='X' src="meteor-icons_xmark.svg" onClick={() => setShow(false)} />
                        
                            {projects.map((pj) => {
                                return (
                                    <div>
                                        <div className='ppp_title' key={pj.id}>
                                            <div className='ppp_title_github'>
                                                <h1>{pj.title}</h1>
                                                <a href={pj.github} target="_blank" rel="noopener noreferrer"><img src="github.svg" alt="" /></a>
                                            </div>
                                            <img className='ppp_img' src={pj.img} alt="" />
                                        </div>
                                        <div className='ppp_data'>
                                            <div className='ppp_note'>
                                                <div className='ppp_number'>
                                                    <b>참여 인원</b>
                                                    <p>{pj.number}</p>
                                                </div>
                                                <div className='ppp_date'>
                                                    <b>기간</b>
                                                    <p>{pj.date}</p>
                                                </div>
                                                <div className='ppp_tool'>
                                                    <b>기술 스택</b>
                                                    <div className='ppp_toolname' >
                                                        {pj.tool.map((pjt, i) => {
                                                            return (
                                                                <p className='tool' key={i}>{pjt}</p>
                                                            )
                                                        })}
                        
                                                    </div>
                                                </div>
                                                <div className='ppp_url'>
                                                    <div className='ppp_link'>
                                                        <b>배포 URL</b>
                                                        <a href={pj.url} target="_blank" rel="noopener noreferrer"><img src="tabler_external-link.svg" alt="" /></a>
                                                    </div>
                                                    <a className='ppp_linkURL' href={pj.url} target="_blank" rel="noopener noreferrer"><p>{pj.url}</p></a>
                                                </div>
                        
                                            </div>
                                            <div className='ppp_text'>
                                                <b>프로젝트 상세 내용</b>
                                                <p>{pj.detail}</p>
                                            </div>
                                            <div className='ppp_opp'>
                                                <b>작품 내 역할</b>
                                                <p>{pj.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>
            }
        </>
    )
}