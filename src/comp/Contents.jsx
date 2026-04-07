import React from 'react'

function Contents() {
  return (
    <div className='H_imgBox_group'>
      <figure className='H_imgBox'>
        <img src='Ellipse_1.png'></img>
        <figcaption className='H_note'>“Frontend developer focused on user experience.”</figcaption>
      </figure>

      <svg width="673" height="575" className="diamond" >
        <path id="path" xmlns="http://www.w3.org/2000/svg" d="M42.2773 70.7764C73.9722 27.8031 135.54 12.9971 209.645 23.9893C283.725 34.9778 370.194 71.7364 451.473 131.683C532.751 191.629 593.409 263.383 625.788 330.913C658.178 398.465 662.217 461.659 630.522 504.633C598.828 547.606 537.26 562.412 463.155 551.42C389.075 540.431 302.605 503.673 221.327 443.727C140.049 383.78 79.3906 312.026 47.0117 244.496C14.6221 176.944 10.5825 113.75 42.2773 70.7764Z" fill="transparent" stroke="white" />

        <g>
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path" />
          </animateMotion>
          <rect x="0" y="0" fill="white" />
        </g>

        <g>
          <animateMotion dur="6s" begin="3s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path" />
          </animateMotion>
          <rect x="0" y="0" fill="white" />
        </g>
      </svg>
    </div>
  )
}

export default Contents