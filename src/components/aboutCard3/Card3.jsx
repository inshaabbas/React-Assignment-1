import React from 'react'
import "./card3.css"

const Card3 = () => {
  const cards = [
    {
      id: "01",
      title : "Sign Up",
      desc : "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
    },
    {
      id: "02",
      title : "Repellat Nihil",
      desc : "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"
    },
    {
      id: "03",
      title : "Ad an Velit qui",
      desc : "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis para dest"
    },
  ]
  return (
    <>
    <div className='about-3'>
        {
          cards?.map((card, i) => (
            <div className="card3" key={i + card.id}>
                <div className="card3-body">
                  <span>{card.id}</span>
                  <h4 className="card3-title">{card.title}</h4>
                  <p className="card3-text">{card.desc}</p>
                </div>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Card3