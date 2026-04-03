import Contents from "./Contents"

function About() {
  return (
    <div className="A_all">
        <h1 className="title">About</h1>

        <div className="A_contentsBox">

            <div className="A_textAll">

                <div className="A_data">
                    <div className="A_mission">
                        <b className="mission_profile">mission</b>
                        <p className="mission_note">안녕하세요, 저는 프론트엔드 개발자가 되고싶은 이현주입니다.</p>
                        <p className="mission_note">사용자 경험을 중심으로 더 나은 인터페이스를 만들어가는 것이 저의 Mission입니다.</p>
                
                    </div>

                    <div className="A_profile">
                        <b className="mission_profile">profile</b>
                        <div className="A_profileAll">
                            <div className="A_profile_note">
                                <img className="profileIcon" src="/iconamoon_profile.svg" alt="아이콘" />
                                <p className="mission_note">이현주 LEE HYUN JU</p>
                            </div>
                            <div className="A_profile_note">
                                <img className="profileIcon" src="/iconoir_birthday-cake.svg" alt="아이콘" />
                                <p className="mission_note">1996.07.09</p>
                            </div>
                            <div className="A_profile_note">
                                <img className="profileIcon" src="/lucide_house.svg" alt="아이콘" />
                                <p className="mission_note">경기도 양주시</p>
                            </div>
                            <div className="A_profile_note">
                                <img className="profileIcon" src="/material-symbols_mail-outline.svg" alt="아이콘" />
                                <p className="mission_note">h87731381@gmail.com</p>
                            </div>
                            <div className="A_profile_note">
                                <img className="profileIcon" src="/line-md_github.svg" alt="아이콘" />
                                <p className="mission_note">GitHub</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Contents />

        </div>
        
    </div>
  )
}

export default About