import React from 'react';
import QueueAnim from 'rc-queue-anim';

export const Career = () => (
  <div className="ui-timeline-container">
    <section className="ui-timeline">
      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-caption">
              <a href="" className="btn btn-primary btn-block">Present</a>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">
              <span style={{fontWeight:'bolder'}}>Jul 2019 – Sep 2019</span>
              <br />
              <span>(1 year and 3 months)</span>
              <br />
              <span style={{color: '#979898', fontSize: '12px'}}>Startup Venture</span>
            </div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary" style={{marginTop: 'unset'}}>
                <strong>Founder</strong>
                <br /> 
                <span style={{fontSize:'16px'}}>SignZen</span>
              </h4>
              <li>Set strategy and vision.</li>
              <li>Managed and built initial product.</li>
              <li>Built the initial team.</li>
              <li>Managed and set team expectations and deliverables.</li>
              <li>Validated idea against prospective clients.</li>
              <li>Gained two prospective clients after two weeks of validation.</li>

              <br />
              Technologies Used:
              <div className='row' style={{paddingLeft: '15px'}}>
                <div className="text-center" style={{minWidth: '55px', maxWidth:'80px', float:'left'}}>
                  <img width='50' height='50' src={'https://img.stackshare.io/service/1209/javascript.jpeg'} alt="boohoo" className="img-responsive"/>
                  <br />
                  <span style={{fontSize:'10px', color:'gray', width:'100%'}}>Javascript</span>
                </div>
                <div className="text-center" style={{minWidth: '55px', maxWidth:'80px', float:'left'}}>
                  <img width='50' height='50' src={'https://img.stackshare.io/service/1209/javascript.jpeg'} alt="boohoo" className="img-responsive"/>
                  <br />
                  <span style={{fontSize:'10px', color:'gray', width:'100%'}}>Javascript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item alt">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Apr 2016 – Jun 2019</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Software Test Engineer at Branded Entertainment Network</h4>
              <li>Create and update automated end user tests every sprint before release.</li>
              <li>Eliminated debugging stress from existing automated tests by introducing the Gherkin.</li>
              <li>Reduced existing automated end user test runtime by 600%.</li>
              <li>Reduced manual regression data preparation from 16 hours to 5 minutes.</li>
              <li>Designed and built API test framework.</li>
              <li>Designed and built an internal service to pipe users youtube real-time experience.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Jan 2015 – Mar 2016</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Software Test Engineer at InnoVint</h4>
              <li>Designed, built and automated end user tests.</li>              
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item alt">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Apr 2012 –Mar 2014</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Software Engineer at Black Marlin Data Corp</h4>
              <li>Designed, built and refactored features for existing web and mobile application.</li>
              <li>Ensured that deliverables are always addressed even if deadline is very tight.</li>
              <li>Helped launched hybrid mobile application after 8 months on the project. Mobile application generated revenue during the first month. Management team members got promotions on the next month.</li>
              <li>Improved overall code performance which reduced average page load time from 3~8 minutes to 2~5 seconds.</li>
              <li>Constantly improved existing application by suggesting new ideas, testing out new technologies and prototyping new solutions. New and some existing projects then implemented AngularJS, as a front end framework choice.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Mar 2011 – Apr 2012</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Software Engineer at Zappli</h4>
              <li>Fixed bugs, built and integrated new features for existing web and mobile application.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item alt">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">May 2009 – Mar 2011</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Software Engineer at Fabulous Apps LLC</h4>
              <li>Independently designed, built and deployed web applications.</li>
              <li>Constantly managed expectations from product owner.</li>
            </div>
          </div>
        </div>
      </article>     

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Mar 2009 – Jun 2010</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Junior Software Engineer at Orange and Bronze Software Labs</h4>
              <li>Designed, built and integrated features for new and existing web applications.</li>
              <li>Ensured that deliverables are always addressed even if deadline is tight.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item alt">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Jan 2009 – Mar 2009</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Sofware Engineer at IVANT Technologies</h4>
              <li>Built shopping cart feature for existing platform.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Jun 2008 – Dec 2008</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Junior Associate at Azeus Systems Philippines</h4>
              <li>Helped company cut cost by developing a database synchronization tool for remote and local databases, along with another developer.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item alt">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-time">Jan 2006 – Feb 2007</div>
            <div className="tl-icon btn-icon-round btn-icon btn-icon-thin btn-info"><i className="material-icons">camera</i></div>
            <div className="tl-content">
              <h4 className="tl-tile text-primary">Junior J2EE Developer at Alarius Systems LLC</h4>
              <li>Designed, built, integrated and deployed J2EE applications.</li>
              <li>Optimized subroutines to improve performance of projects by 20% to 50%.</li>
              <li>Reviewed codes, fixed bugs, improved documentation and code on a daily basis, along with two other developers.</li>
            </div>
          </div>
        </div>
      </article>

      <article className="tl-item">
        <div className="tl-body">
          <div className="tl-entry">
            <div className="tl-caption">
              <a href="" className="btn btn-success btn-block">Career Start</a>
            </div>
          </div>
        </div>
      </article>

    </section>
  </div>
);

const Page = () => (
  <div className="container-fluid container-mw-xl chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Career /></div>
    </QueueAnim>
  </div>
);

export default Page;
