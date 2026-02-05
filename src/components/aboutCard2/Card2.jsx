import React from 'react'
import Img1 from "../../assets/about2-img1.png"
import Img2 from "../../assets/about2-img2.png"
import Img3 from "../../assets/about2-img3.png"
import "./card2.css"

const Card2 = () => {
  const cards = [
    {
      id: 1,
      img: Img1,
      icon: "bi bi-hdd-stack",
      title: "Explore Your Team",
      desc: "Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      img: Img2,
      icon: "bi bi-brightness-high",
      title: "Digital Whiteboard",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      id: 3,
      img: Img3,
      icon: "bi bi-calendar-week",
      title: "Design To Development",
      desc: "Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
    },
  ]
  return (
    <>
      <div className='about-2'>
        {
          cards?.map((card, i) => (
            <div className="card2" key={i + card.id}>
              <img src={card.img} alt="Card Img"/>
                <div className="card2-body">
                  <span><i className={card.icon}></i></span>
                  <h5 className="card2-title">{card.title}</h5>
                  <p className="card2-text">{card.desc}</p>
                </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Card2