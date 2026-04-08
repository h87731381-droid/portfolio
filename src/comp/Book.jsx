import axios from 'axios'
import { useEffect, useState } from 'react';

/* 몽고db서버에서 데이터 (그냥x 조건있음)가져오기 + 데이터 출력시 이름,날짜,시간 어떻게 가져올건지 */
function Book() {

  const [guestList,setGuestList] = useState([]);
  const [page,setPage] = useState(1);
  const [total,setTotal] = useState([]);

  const save = async function (e) {
    e.preventDefault();
    if (e.target.nickname.value === '') {
      alert('이름을 입력하세요.')
      return;
    }
    if (e.target.bookText.value === '') {
      alert('내용을 입력하세요.')
      return;
    }
    const formdata = new FormData(e.target);
    var date = new Date();
    
    const dateformat = new Intl.DateTimeFormat('ko-KR',{
            year:'numeric',
            month:'2-digit',
            day:'2-digit',
            hour:'2-digit',                                     /* 정규표현식 -지피티확인 */
            minute:'2-digit'}).format(date).toString().replace(/(\d{2})\.(?=\s*(오전|오후))/, '$1').replaceAll(/[가-힣]/g,'')
         
    formdata.append('date',dateformat)

    const data = Object.fromEntries(formdata);
    await axios.post(`${process.env.REACT_APP_APIURL}/guest`, data);

    /* form에 글을 작성하고 버튼을 누르면 form 안에 글자 지워지기 */
    e.target.reset();

    getdata();

  }

  const getdata = async function (e) {
    const res = await axios.get(`${process.env.REACT_APP_APIURL}/guest`);

    //page
    let limit = 4, data = [];
    let start = (page - 1) * limit;
    
    data = res.data.data.slice(start, start + limit);
    
    //page num
    setTotal( Math.ceil( res.data.data.length / limit ) )
    setGuestList(data);
  }

  /* getdata를 처음 딱 한번만 실행하기 */
  useEffect(()=>{
    getdata();
  },[page])

  
  
  /* 데이터의 갯수가 0 이면.. */
  if(guestList.length === 0) return;


  /* 출력하기 */
  return (
    <div>
      <h1 className='title'>Guest Book</h1>

      <div className='book_section'>

        <div className='guestBook'>
          <form onSubmit={(e) => save(e)}>
            <div className="nickName">
              <input type="text" name="nickname" maxLength={3} autoComplete="off" placeholder="이름을 입력해주세요." />
            </div>
            <div className='book_guest'>
              <textarea className='book_text' name="bookText" maxLength={120} autoComplete="off" placeholder="포트폴리오를 보고 느낀점을 자유롭게 남겨주세요.(50자 이내)">
              </textarea>
              <button>등록하기</button>
            </div>
          </form>

          <div className="book_list">

            {guestList.map((dataMap)=>{
              return <div className='book_note' key={dataMap._id}>
                        <p className='book_txt'>{dataMap.bookText}</p>

                        <div className='book_detail'>
                          <p>{dataMap.nickname}</p>
                          <p>{dataMap.date}</p>
                        </div>
                      </div>
            })}

          </div>

        </div>
        <div className='book_page'>
          <img onClick={()=>{page !== 1 && setPage(page-1)}} className="arrow_left" src="mdi-light_chevron-left.svg" alt="" />
            {
              new Array(total).fill(0).map((o,i)=>(
                <p key={i} onClick={()=>setPage(i+1)} className={page === i+1 ? 'active':''}> {i+1} </p>
              ))
            }
          <img onClick={()=>{page < total && setPage(page+1)}}  className="arrow_right" src="mdi-light_chevron-right.svg" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Book