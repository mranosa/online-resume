import React from 'react';
import QueueAnim from 'rc-queue-anim';

const testimonials = [
  {
    contents: [
      'It was nice to work with Ken in BEN.',
      'The work he did, helped identifying lots of bugs specially during big refactoring / breaking changes of the code.',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQFcpwI4oMSURw/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=oyPHmoMuuWJkmdb3gu0hDOxYh98FKfA-4FD_ITi25MM',
    name: 'Peter Milan',
    title: 'Software Engineer at Branded Entertainment Network'
  }, {
    contents: [
      'Ken played a key role in ensuring platform stability as we rolled out new features and grew the platform.',
      'His work ethic is extremely strong and proved to be a person easy for everyone to get along with.',
      'We had concerns regarding bringing a team member into a small team from so many timezones away but this was proven to be a non-issue. I attribute this to his aforementioned work ethic and accountability.',
      'Ken will make a good addition to any team.',
    ],
    avatar: 'data:image/jpeg;base64,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',
    name: 'Andrew Headrick',
    title: 'Founder at Innovint'
  }, {
    contents: [
      'I can recommend Mark\'s passion for solving problems.',
      'Given a good amount of resources, he can probably succeed in starting up a good business.',
      'It helps that he also has some technical chops to get things started.',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQFaV0BY0O07yQ/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=VXH9zLK0DTgIUv7GqzS7yIFdCGoCS2v_LKXMMXmAsdk',
    name: 'Reginald Eli Deinla',
    title: 'Sr. Software Engr at Rocketmiles'
  }, {
    contents: [
      'Kenneth and I are team mates before in one project.',
      'He is a good team player and is always ready to help. He ensures that the project meets deadline.',
      'He is excited about new web technologies and likes to play with them. He makes suggestions to improve application architectures and is able to find loopholes to existing ones.',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQGXDnmIhTH6Og/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=0KwYaEzzh02c4hq5wz79F7HUDw79_FHEFTC8ijSMzLY',
    name: 'Stefan Bernard Lavilla',
    title: 'Full Stack Java Developer at Pet Circle'
  }, {
    contents: [
      'If you need something done in a short period of time with new technologies, Ken is the man for it!',
      'We have worked on bootstrapping a project and his inputs has helped us get the project up to speed in no time. From database design, stack architecture and user experience.',
      'He is passionate in everything that he does, loves learning the new technology, fast, reliable, efficient and easily gets a long with everyone.',
      'I HIGHLY RECOMMEND THIS GUY! All the best in your endevours!',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQHeT1iPEnNSiw/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=A7RnTsaOS2Orwwr1w4tcFkFrlVbq9_vlIWIOulkEc3Q',
    name: 'Limuel Flores',
    title: 'Senior Java Developer at Black Marlin Data Corporation'
  }, {
    contents: [
      'Mark was reporting to me at BMDC, he is a quick learner of new technologies.',
      'He always came to me with new ideas or recommendations to try with our products.',
    ],
    avatar: 'data:image/jpeg;base64,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',
    name: 'Kelvin Hui',
    title: 'Development Manager at Iron Data Solutions'
  }, {
    contents: [
      'I have worked with Kenneth and he is good at learning new technologies and immediately using it to good use in the projects that he has worked on.',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQE-P3GukXGiuA/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=8TM3IPmC6YLjguiqchV1KVkH3sMg6-drzsnXtacb6K8',
    name: 'Giovanni Cruz',
    title: 'Software Engineer at Intertec International'
  }, {
    contents: [
      'Kenneth was probably my best java programmer when he was still my student in PSHS.',
      'He is a really passionate developer. He never stops trying new things to improve his craft.',
      'I am sure he will be valuable asset to any team he joins.',
    ],
    avatar: 'https://media-exp1.licdn.com/dms/image/C5103AQHfmqNpelFtLw/profile-displayphoto-shrink_100_100/0?e=1609977600&v=beta&t=JrdSWBLaPqAyDTFkJr3Sl-2-B3WTdUBN7yktihWBD_8',
    name: 'Dino Bagayaua',
    title: 'Senior Manager at RCG Global Services'
  }
];

class Recommendations extends React.Component {
  state = {
    testimonials,
  };

  render() {
    return (
      <article className="article">
        
        <div className="row">
          {
            this.state.testimonials.map((testimonial, index) => (
              <div className="col-xl-4" key={index}>
                <div className="testimonial testimonial-alt">
                  <span className="testimonial__quote"><i className="material-icons">format_quote</i></span>
                  <blockquote>
                    {
                      testimonial.contents.map((content) => {
                        return (
                          <span>
                            {content}<br /><br />
                          </span>
                        )
                      })
                    }
                  </blockquote>
                  <img alt="avatar" className="avatar" src={testimonial.avatar} />
                  <h5>{testimonial.name}</h5>
                  <span className="title">{testimonial.title}</span>
                </div>
              </div>
            ))
          }
        </div>
      </article>
    );
  }
}

const Page = () => (
  <section className="container-fluid container-mw-xl chapter" >
    <QueueAnim type="bottom" className="ui-animate">
      <div><Recommendations /></div>
    </QueueAnim>
  </section>
);

export default Page;
