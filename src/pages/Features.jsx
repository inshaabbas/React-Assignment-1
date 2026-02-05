import FeatureImg1 from "../assets/Feature-img-1.svg"
import FeatureImg2 from "../assets/Feature-img-2.svg"
import FeatureImg3 from "../assets/Feature-img-3.svg"
import FeatureImg4 from "../assets/Feature-img-4.svg"

const Features = () => {
  return (
    <>
    <div className='feature-section container-xxl' id="features">
      <div className='feature-head'>
        <h2>Features</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='features-main'>
        {/* Feature Section 1 */}
        <div className='feature-sec-1'>
          <div className='sec-1-img'>
            <img src={FeatureImg1} alt="Feature Img" className="img-fluid" />
          </div>
          <div className='sec-1-text'>
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
            <span><i class="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
            <span><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            <span><i class="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</span>
          </div>
        </div>
        {/* Feature Section 2 */}
        <div className='feature-sec-2'>
          <div className='sec-2-text'>
            <h3>Corporis temporibus maiores provident</h3>
            <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className='sec-2-img'>
            <img src={FeatureImg2} alt="Feature Img" className="img-fluid" />
          </div>
        </div>
        {/* Feature Section 3 */}
        <div className='feature-sec-3'>
          <div className='sec-3-img'>
            <img src={FeatureImg2} alt="Feature Img" className="img-fluid" />
          </div>
          <div className='sec-3-text'>
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p><em>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</em></p>
            <span><i class="bi bi-check"></i>Ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
            <span><i class="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
            <span><i class="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</span>
          </div>
        </div>
        {/* Feature Section 4 */}
        <div className='feature-sec-4'>
          <div className='sec-4-text'>
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></p>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className='sec-4-img'>
            <img src={FeatureImg4} alt="Feature Img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features