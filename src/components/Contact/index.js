import React from "react";


function Contact() {

    return (
      <section className="container" id="Contact-Me">
       <div className="title">
         <h1>Contact Information</h1>
       </div>
       <div className="content">
            <div id="contact-wrapper">
                    <div className="contact-tile">
                        <a href="telephone number: 615-506-5438">
                            <i className="phone-img"></i>
                        </a>
                            <p>615-506-5438</p>
                    </div>

                    <div className="contact-tile">
                        <a href="istephensondev@gmail.com">
                            <i className="email-img"></i>
                        </a>
                            <p>Istephensondev@gmail.com</p>
                    </div>

                    <div className="contact-tile">
                        <a href="https://www.linkedin.com/in/ivystephensondev">
                            <i className="linkedin-img"></i>
                        </a>
                            <p>Linkedin</p>
                    </div>

                    <div className="contact-tile">
                        <a href="https://github.com/Istephensondev">
                            <i className="github-img"></i>
                        </a>
                            <p>Github</p>
                    </div>

            </div> 
       </div>
      </section>
    )
  }
  
  export default Contact