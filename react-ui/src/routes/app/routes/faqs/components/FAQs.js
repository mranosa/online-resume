import React from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './styles.module.scss';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1 className="hero-title">FAQs</h1>
    </div>
    <p className="hero-tagline">Frequently Asked Questions</p>
  </section>
);

const faqs = [{
  question: 'Tell me something about yourself?',
  answers: [
    'I am an enthusiastic person who understands that career is very important to my overall fullfilment and happiness.',
    'I am a self starter, self taught and I constantly learn, unlearn and relearn. I also love prototyping my ideas using new technologies on my free time.',
    'I am mindful about my workflow and find ways to improve it. I highly value time and plan the week\'s work in advance. This helps me lessen anxiety and stress by finding the right balance for goals. Removing as much noise as possible and execute only on important tasks to attain hyper focus. I am commited to help my colleagues achieve their goals, and try to do whatever I can to make everyone happy.',
    'I also see to it that I create more value over time. I do this by being mindful about whatever I work on. So that I can feel and list existing challenges, and suggest solutions for it.',
  ],
}, {
  question: 'What are your strengths?',
  answers: [
    'I ensure that I get things done. I see to it that I achieve at least one goal a day.',
    'I love solving hard problems creatively. I seldom search the book or online for existing solutions. I only do so to understand the problem more.',
    'I constantly challenge and improve myself. I do this by reading books and tinkering with personal ideas using new technologies that I get interested in.',
    'Lastly, I easily get along with anyone. Its a beautiful world! We should love everyone, especially those who hate us the most. :)',
  ],
}, {
  question: 'What are your weaknesses?',
  answers: [
    'I easily get distracted. I have struggled with distraction over the years. But am constantly solving this problem. What I learned is that, in order to establish very productive working habits. You have to remove digital and personal noise during work hours. Once I start on a task I detach myself from everyone and everything until I am done for a certain alloted timeframe. Also work environment is crucial, you need a personal space where you will be undisturbed for a certain period of time.',
    'I also tend to overthink things leading to analysis paralysis. Because of this, before I start on a task, I define certain milestones for it to be considered as done. I setup objective, key and results chart in advance. And also set timeboxes for each chunked goals.',
    'And one thing that I hate the most is that, I get irritated when people dont deliver. When I commit to a promise, I see to it that it gets done and expect other people to do so. Word is bond, and I highly value integrity. If someone doesnt deliver, I try to be as diplomatic as possible. I ask them what the challenge is and ask if there is anything I can help with. The team is only as good as its weakest link.',
  ],
}, {
  question: 'What are you looking for now?',
  answers: [
    'I am currently looking for a software engineering role where I can contribute my existing skills, qualities and experience. I am looking for a pure remote setup, who will give me a fresh challenge.',
    'It is important that the company has a growth mindset, results oriented, provides autonomy, lack corporate bullshit and should pay fairly with the global market rate as a baseline.',
  ],
}, {
  question: 'Where do you see yourself in 5 years?',
  answers: [
    'Once I start with a new company. During the first 3 months, I first need to get highly competent for the role.',
    'Once competent, I need to establish a velocity that is highly productive.',
    'Later on, if a leadership role presents itself that would be amazing.',
    'All in all, I plan to stay with my next company long term.',
  ],
}, {
  question: 'What makes an awesome team?',
  answers: [
    'Firstly, the team has to have a dedicated and effective leader. Someone who is at least 10x an existing member. The questions that I ask myself if my leader is worth it or not, are: Will you go to battle with this guy? If the roles are reversed, would you take him as a subordinate? Does the leader have a focused passion and vision? And if the company runs out of money, would you still keep on with him/her?',
    'I also look for a highly energetic team, one with an awesome culture and synergy. This in turn ensures that the team has the ability to focus and deliver clear goals to achieve for upcoming timelines. And should importantly be supportive of each other, it is vital that everyone helps each other grow, profesional and personally.',
    'Whenever I join a team, I always see to it that I am the weakest link, so that I can grow exponentially. At the end of the day, its all about the team. If you want to grow your business, if you want to grow personally. If you want to have an awesome life, nothing is more important than the team.',
    'The best team wins.',
  ],
}]

const FAQs = () => (
  <article className="article article-dark article-bordered">
    <div className="container-fluid container-mw-xl py-6">
      <div className="row">
        <div className="col-xl-6">
          {
            faqs.slice(0, faqs.length/2).map((faq, index) => {
              return (
                <div>
                  <h4>{faq.question}</h4>

                  {
                    faq.answers.map((answer) => {
                      return (
                        <p>{answer}</p>
                      )
                    })
                  }
                  <div className="divider my-5 divider-dashed" />
                </div>
              )
            })
          }
        </div>
        <div className="col-xl-6">
          {
            faqs.slice(faqs.length/2, faqs.length).map((faq, index) => {
              return (
                <div>
                  <h4>{faq.question}</h4>

                  {
                    faq.answers.map((answer) => {
                      return (
                        <p>{answer}</p>
                      )
                    })
                  }
                  <div className="divider my-5 divider-dashed" />
                </div>
              )              
            })
          }
        </div>
      </div>
    </div>
  </article>
);

const Page = () => (
  <section className={`chapter ${styles.page_faqs}`}>
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Hero /></div>
      <div key="2"><FAQs /></div>
    </QueueAnim>
  </section>
);

export default Page;
