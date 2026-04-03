

function Book() {
  return (
    <div>
        <h1 className='title'>Guest Book</h1>

        <div className='book_section'>

          <div className='guestBook'>
            <div className='book_guest'>
              <form className="formtext" action="">
                <textarea className='book_text' maxLength={120} placeholder="이 곳은 방명록을 쓰는 공간입니다.
                  포트폴리오를 보고 느낀점을 자유롭게 남겨주세요.(100자 이내)">
                </textarea>
          
                <button>등록하기</button>
              </form>
          
            </div>

            <div className="book_list">

              <div className='book_note'>
                <p className='book_txt'>멋진 포트폴리오 입니다. 안녕하세요~~~~~~~ </p>
                <div className='book_detail'>
                    <p>홍장미</p>
                    <p>2026.01.01</p>
                    <p>18:00</p>
                </div>
              </div>

              <div className='book_note'>
                <p className='book_txt'>멋진 포트폴리오 입니다. 안녕하세요~~~~~~~ </p>
                <div className='book_detail'>
                    <p>홍장미</p>
                    <p>2026.01.01</p>
                    <p>18:00</p>
                </div>
              </div>

              <div className='book_note'>
                <p className='book_txt'>멋진 포트폴리오 입니다. 안녕하세요~~~~~~~ </p>
                <div className='book_detail'>
                    <p>홍장미</p>
                    <p>2026.01.01</p>
                    <p>18:00</p>
                </div>
              </div>

              <div className='book_note'>
                <p className='book_txt'>멋진 포트폴리오 입니다. 안녕하세요~~~~~~~ djwjrnwjwjrndkdfusofjkaddddsfsdfsdfsdfsdffsfsfsdgdgfdgfdrfrhgdfgszdsfsfdsfdsfsfddjwjrnwjwjrndkdfusofjkaddddsfsdfsdfsdfsdffsfsfsdgdgfdgfdrfrhgdfgszdsfsfdsfdsfsfddjwjrnwjwjrndkdfusofjkaddddsfsdfsdfsdfsdffsfsfsdgdgfdgfdrfrhgdfgszdsfsfdsfdsfsfddjwjrnwjwjrndkdfusofjkaddddsfsdfsdfsdfsdffsfsfsdgdgfdgfdrfrhgdfgszdsfsfdsfdsfsfd</p>
                <div className='book_detail'>
                    <p>홍장미</p>
                    <p>2026.01.01</p>
                    <p>18:00</p>
                </div>
              </div>

            </div>

          </div>
          <div className='book_page'>
            <img className="arrow_left" src="mdi-light_chevron-left.svg" alt="" />
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            <img className="arrow_right" src="mdi-light_chevron-right.svg" alt="" />
          </div>
        </div>

    </div>
  )
}

export default Book