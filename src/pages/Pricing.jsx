import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className='pricing-section container-xxl' id='pricing'>
      <div className='pricing-head'>
        <h2>Pricing</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='pricing-cards'>
        {/* Card 1 */}
        <div className='pricing-card-1'>
          <div className='price-card-top'>
            <h3>Free Plan</h3>
          <div className='layer-3'>
            <div className='layer-2'>
              <div className='layer-1'><i class="bi bi-box"></i></div>
            </div>
          </div>
          <h2><sup>$</sup>0<sub>/month</sub></h2>
          </div>
          <div className='card-text'>
            <p><i class="bi bi-check"></i>Quam adipiscing vitae proin</p>
            <p><i class="bi bi-check"></i>Nec feugiat nisl pretium</p>
            <p><i class="bi bi-check"></i>Nulla at volutpat diam uteera</p>
            <p className='hide'><i class="bi bi-x"></i><s>Pharetra massa massa ultricies</s></p>
            <p className='hide'><i class="bi bi-x"></i><s>Massa ultricies mi quis hendrerit</s></p>
          </div>
          <div className='card-button'>
            <button>Buy Now</button>
          </div>
        </div>
        {/* Card 2 */}
        <div className='pricing-card-1 price-card-border'>
          <div className='price-card-top'>
            <h3>Business Plan</h3>
          <div className='layer-3'>
            <div className='layer-2'>
              <div className='layer-1'><i class="bi bi-box"></i></div>
            </div>
          </div>
          <h2><sup>$</sup>29<sub>/month</sub></h2>
          </div>
          <div className='card-text'>
            <p><i class="bi bi-check"></i>Quam adipiscing vitae proin</p>
            <p><i class="bi bi-check"></i>Nec feugiat nisl pretium</p>
            <p><i class="bi bi-check"></i>Nulla at volutpat diam uteera</p>
            <p><i class="bi bi-check"></i>Pharetra massa massa ultricies</p>
            <p><i class="bi bi-check"></i>Massa ultricies mi quis hendrerit</p>
          </div>
          <div className='card-button'>
            <button>Buy Now</button>
          </div>
        </div>
        {/* Card 3 */}
        <div className='pricing-card-1'>
          <div className='price-card-top'>
            <h3>Free Plan</h3>
          <div className='layer-3'>
            <div className='layer-2'>
              <div className='layer-1'><i class="bi bi-box"></i></div>
            </div>
          </div>
          <h2><sup>$</sup>49<sub>/month</sub></h2>
          </div>
          <div className='card-text'>
            <p><i class="bi bi-check"></i>Quam adipiscing vitae proin</p>
            <p><i class="bi bi-check"></i>Nec feugiat nisl pretium</p>
            <p><i class="bi bi-check"></i>Nulla at volutpat diam uteera</p>
            <p><i class="bi bi-check"></i>Pharetra massa massa ultricies</p>
            <p><i class="bi bi-check"></i>Massa ultricies mi quis hendrerit</p>
          </div>
          <div className='card-button'>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Pricing