import React from "react";

function Projects() {
    return (
      <section className="container" id="Projects">
        <div className="title">
        <h1> Projects </h1>
        </div> 
            <div className="content">
                <div id="project-grid">
                    <div className="project-box" id="box1">
                        <a href="https://istephensondev.github.io/MovieMania/">
                            <div className="project-box-title">
                                <h1>Movie Mania</h1>
                            </div>
                        </a>
                    </div>
                    <div className="project-box" id="box2">
                        <a href="https://istephensondev.github.io/Workday-Scheduler/">
                            <div className="project-box-title">
                                <h1>Work Day Scheduler</h1>
                            </div>
                        </a>
                    </div>

                    <div className="project-box" id="box3">
                        <a href="https://istephensondev.github.io/Weather-Dashboard/">
                            <div className="project-box-title">
                                <h1>Weather Dashboard</h1>
                            </div>
                        </a>
                    </div>
                    <div className="project-box" id="box4">
                        <a href="">
                            <div className="project-box-title">
                                <h1>Task Tracker
                                </h1>
                            </div>
                        </a>                       
                    </div>
                    {/* <div className="project-box" id="box5">
                        <a href="">
                            <div className="project-box-title">
                                <h1></h1>
                            </div>
                        </a>                        
                    </div>
                    <div className="project-box" id="box6">
                        <a href="">
                            <div className="project-box-title">
                                <h1></h1>
                            </div>
                        </a>                        
                    </div> */}
                </div>
            </div>
      </section>
    );
  }
  
  export default Projects