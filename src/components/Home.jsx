import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube,AiFillInstagram } from "react-icons/ai";

const Home = () => {
  return (
    <>

  <div className='home' id='home'>
    <main>
      <h1>QuantumByte</h1>
      <p>Solutions to all your problems</p>
    </main>
  </div>

  <div className="home2">
   <img src={vg} alt="Graphics" />
    <div>
    <p>
    We are your one and only solution to the tech problems you face
    every day. We are leading tech company whose aim is to increase the
    problem solving ability in children.
    </p>
    </div> 
  </div>

  <div className="home3" id='about'>
    <div>
      <h1>Who We Are?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, commodi laborum? Dolorem eveniet esse consequatur dolorum, accusantium fugiat dicta illum quae necessitatibus! Dolores hic voluptatum, eligendi facilis consequatur inventore voluptas!
        Mollitia beatae iste ex consectetur illo perferendis, fugit odio soluta nesciunt consequatur magni natus dolorem corrupti, necessitatibus officia cumque quidem velit nulla unde eveniet obcaecati, saepe nam? Illum, porro sit?
        Enim aliquid labore repudiandae nisi laborum et animi dolore odit laboriosam! Iure cum blanditiis sed consequatur, nihil corporis ipsum, maiores ab, praesentium porro non sapiente impedit officiis velit similique nisi?
      </p>
    </div>
  </div>

  <div className="home4" id='brands'>
    <div>
      <h1>Brands</h1>

      <article>

        <div style={{animationDelay: "0.3s"}}>
          <AiFillGoogleCircle/>
          <p>Google</p>
        </div>

        <div style={{animationDelay: "0.5s"}}>
          <AiFillAmazonCircle/>
          <p>Amazon</p>
        </div>

        <div style={{animationDelay: "0.7s"}}>
          <AiFillYoutube/>
          <p>Youtube</p>
        </div>

        <div style={{animationDelay: "0.9s"}}>
          <AiFillInstagram/>
          <p>Instagram</p>
        </div>

      </article>
    </div>
  </div>

  </>

  )
}

export default Home