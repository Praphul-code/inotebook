import React from 'react';

const About = () => {
  
    return (
        <div>
          <section className="home container" id="home">
        <div className="home-content">
            <div className="home-img">
                <img src="image.png" alt=""/>
            </div>
            <div className="home-text">
                <h3>Hello</h3>
                <h2> I'm <span className="color"> Praphul Porwal</span></h2>
                <p>I'm <span className="color">Upcoming Software Engineer</span>  with a strong passion for building <span className="color"> Web </span> application with great user experience.
                    Here a bit more <span className="color"> about me. </span>
                </p>
            
                <div className="social">
                    <a href="https://www.facebook.com/burmarom/"><i className='bx bxl-facebook'></i></a>
                    <a href="https://twitter.com/ThantZinPhyoBR"><i className='bx bxl-twitter'></i></a>
                    <a href="https://www.youtube.com/c/BurmaRomChannel"><i className='bx bxl-youtube'></i></a>
                </div>
            </div>
        </div>
    </section>
   
    <section className="about container" id="about">
      
      
        <div className="about-content">
            <div className="about-data">
                <span>About Me</span>
                <h2> Web Designer </h2>
                <a href="cv.docx" className="btn" download="">
                    Download CV
                    <i className='bx bx-download'></i>
                </a>
            </div>
            <div className="about-text">
                <p>Hello I am Praphul Porwal. Web Designer and Content Writer .</p>
                <p>I''m from Uttar Pradesh . I Enjoy Sharing Knowledge, Tips and Tricks On Smart Phones.I Believe Life is All About The Contributions and Connections We make, and Knowledge Sharing is a Great Way to Do Both. </p>
                <p>Get your project book with contact button.</p>
            </div>
        </div>
    </section>
        </div>
    )
}

export default About