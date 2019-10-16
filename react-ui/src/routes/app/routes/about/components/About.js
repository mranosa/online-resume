import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TypeScale from './TypeScale';
import Media from './Media';

const About = () => (
  <section style={{paddingTop:'50px', paddingBottom:'50px'}}>
    <article className="article" className="container-fluid col-md-10 ">
      
      <div className="box box-transparent">
        <div className="box-body p-0">
          <div className="row">
            <div className="col-xl-4">
              <Media />
            </div>
            <div className="col-xl-8">              
              <div className="box box-default">
                <div className="box-header">
                  <h4>Hello! Bonjour! Hola! Guten Tag! Tara ika! Ciao! Konnichiwa!</h4>
                  <h4>How can I help?</h4>
                </div>
                <div className="box-body">
                  <p>I am polyglot hacker from the Philippines. I love code and have been at it since high school.</p>
                  <p>I have some experience under my belt, and I also love implementing my ideas on the side.</p>
                  <p>My main drive in life is to use my skills to move mankind forward. The more I can contribute, the more I am driven, passionate and committed.</p>
                  <p>I consider myself as a jack of all trade and a master of none (for now).
                  I want to experience the whole technical spectrum.</p>
                  <p>I love taking my time to enjoy the process, and constantly improve myself and my workflow along the way.</p>
                  <p>I am currently looking for remote work. Technically, as of the moment, my heart is leaning towards AI, mobile dev or site reliability.
                  But if you think my goals, values, skills and experience can offer value to your team, 
                  dont hesitate to send me a private message or an email. 
                  You can also reach me at <a href="https://www.linkedin.com/in/mranosa/" target="_blank">linkedin</a> or <a href="https://www.facebook.com/g3tR3ktn1gg4" target="_blank">facebook</a>.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>

);

const Page = () => (
  <div className="container-fluid container-mw-xl chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><About /></div>
    </QueueAnim>
  </div>
);

export default Page;

