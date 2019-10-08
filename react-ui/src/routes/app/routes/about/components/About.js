import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TypeScale from './TypeScale';
import Media from './Media';

const About = () => (
  <section style={{'padding':'50px'}}>
    <article className="article" className="container-fluid col-md-10 ">
      
      <div className="box box-transparent">
        <div className="box-body p-0">
          <div className="row">
            <div className="col-xl-4">
              <Media />
            </div>
            <div className="col-xl-8">              
              <div className="box box-default">
                <div className="box-header"><h4>Hello! Bonjour! Hola! Guten Tag! Tara ika! Ciao! Namaste! Ohayo!</h4></div>
                <div className="box-body">
                  <p>I am polyglot hacker from the Philippines. I love code and have been at it since high school.</p>
                  <p>I have some experience under my belt, and I also love implementing my ideas on the side.</p>
                  <p>My main drive in life is to use my skills to move mankind forward. So the more value I can give to the community, the more I am driven, passionate and commited.</p>
                  <p>I consider myself as a jack of all trade and a master of none (for now).
                  I want to experience the whole technical spectrum.</p>
                  <p>I love taking my time to enjoy the process, and constantly improve myself and my workflow along the way.</p>
                  <p>Technically right now, my heart is leaning towards learning AI. Hopefully I get deep tech knowledge with it in the upcoming months.</p>
                  <p>I am currently actively looking for remote work.
                  If you think my goals, values and skills are a fit, 
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

