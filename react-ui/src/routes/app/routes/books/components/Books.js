import React from 'react';
import classnames from 'classnames';
import QueueAnim from 'rc-queue-anim';

const books = [
  {
    name: 'Ultralearning',
    author: 'Scott Young',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51D5dwBcSFL._SL500_.jpg',
  }, {
    name: 'Psycho-Cybernetics',
    author: 'Maxwell Maltz',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51XVTl7HZTL._SL500_.jpg',
  }, {
    name: 'F--k Your Feelings',
    author: 'Ryan Munsey',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51LtsFmdPML._SL500_.jpg',
  }, {
    name: 'Good to Great',
    author: 'Jim Collins',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41tCQsn8UGL._SL500_.jpg',
  }, {
    name: 'The ONE Thing',
    author: 'Gary Keller, Jay Papasan',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41mDQ4JH8EL._SL500_.jpg',
  }, {
    name: 'The Little Book of Big Change',
    author: 'Amy Johnson PhD',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41i9G-vkReL._SL500_.jpg',
  }, {
    name: 'Becoming Supernatural',
    author: 'Dr. Joe Dispenza',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/61F6NPH1+IL._SL500_.jpg',
  }, {
    name: 'The Messy Middle',
    author: 'Scott Belsky',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41+fcfGskBL._SL500_.jpg',
  }, {
    name: 'The Millionaire Fastlane',
    author: 'MJ DeMarco',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51MsMgvIUcL._SL500_.jpg',
  }, {
    name: 'The Rational Male',
    author: 'Rollo Tomassi',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51vIpCNh7bL._SL500_.jpg',
  }, {
    name: 'Goal Setting Life Reset Course',
    author: 'Drew McArthur',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51Yuf4ed6iL._SL500_.jpg',
  }, {
    name: 'Pitch Anything',
    author: 'Oren Klaff',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51XGe+Fo9wL._SL500_.jpg',
  }, {
    name: 'Outwitting the Devil',
    author: 'Napoleon Hill',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/510wN7XFiNL._SL500_.jpg',
  }, {
    name: 'Levels of Energy',
    author: 'Frederick E. Dodson',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/61aPdL+SfFL._SL500_.jpg',
  }, {
    name: 'Journeys in Spectral Consciousness',
    author: 'Frederick Dodson',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51SnbUenTeL._SL500_.jpg',
  }, {
    name: 'Realms of Consciousness',
    author: 'Frederick Dodson',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51kU07k4BWL._SL500_.jpg',
  }, {
    name: 'The 10X Rule',
    author: 'Grant Cardone',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51txCrB2JqL._SL500_.jpg',
  }, {
    name: 'Atomic Habits',
    author: 'James Clear',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Scientific Secrets for Self-Control',
    author: 'C. Nathan DeWall',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/513Y5o-DYtL._SL500_.jpg',
  }, {
    name: 'The Way of the Superior Man',
    author: 'David Deida',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/61pqlNBnmQL._SL500_.jpg',
  }, {
    name: 'Doing the Right Things Right',
    author: 'Laura Stack',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51AFa06s97L._SL500_.jpg',
  }, {
    name: 'Resisting Happiness',
    author: 'Matthew Kelly',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51f3lEFLqlL._SL500_.jpg',

  }, {
    name: 'Discipline',
    author: 'Mick Kremling',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51v3eMBYcUL._SL500_.jpg',

  }, {
    name: 'How Not to Worry',
    author: 'Paul McGee',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51hh-QtvUNL._SL500_.jpg',
  }, {
    name: 'Mindfulness',
    author: 'Mark Williams, Danny Penman, Jon Kabat-Zinn',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51CYHUV1VwL._SL500_.jpg',
  }, {
    name: 'Extreme Productivity',
    author: 'Robert C. Pozen',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/51Dm22KXcQL._SL500_.jpg',
  }, {
    name: 'How Not to Be Wrong',
    author: 'Jordan Ellenberg',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41w0iQ8Mf4L._SL500_.jpg',
  }, {
    name: 'Psyched Up',
    author: 'Daniel McGinn',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41WMTtrEhNL._SL500_.jpg',
  }, {
    name: 'Change Your Schedule, Change Your Life',
    author: 'Dr. Suhas Kshirsagar, Michelle Seaton, Deepak Chopra',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'https://m.media-amazon.com/images/I/41hJj8XBweL._SL500_.jpg',
  }, {
    name: 'So Good They Cant Ignore You',
    author: 'Cal Newport',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Complete Conversations with God',
    author: 'Neale Donald Walsch',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Blitzscaling',
    author: 'Reid Hoffman, Chris Yeh',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'It Starts with Food',
    author: 'Melissa Hartwig, Dallas Hartwig',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Art of Startup Fundraising',
    author: 'Alejandro Cremades, Barbara Corcoran',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Secrets of the Millionaire Mind',
    author: 'T. Harv Eker',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Straight Talk for Startups',
    author: 'Randy Komisar, Jantoon Reigersman',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Made to Stick',
    author: 'Chip Heath, Dan Heath',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Crossing the Chasm',
    author: 'Geoffrey A. Moore',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Elon Musk',
    author: 'Ashlee Vance',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Zero to One',
    author: 'Peter Thiel, Blake Masters',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Black Hole Focus',
    author: 'Isaiah Hankel',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',

  }, {
    name: 'Stoicism',
    author: 'James Daugherty',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Bulletproof Diet',
    author: 'Dave Asprey',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Enchiridion & Discourses',
    author: 'Epictetus',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Meditations',
    author: 'Marcus Aurelius',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Unshakeable',
    author: 'Tony Robbins',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Exactly What to Say',
    author: 'Phil M. Jones',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Unfettered Mind',
    author: 'Takuan Soho, William Scott Wilson (translator)',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',

  }, {
    nameme: 'Peak Performance',
    author: 'Brad Stulberg, Steve Magness',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Tao Te Ching',
    author: 'Lao Tzu, Stephen Mitchell',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Multipliers',
    author: 'Liz Wiseman, Greg McKeown',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Magic of Thinking Big',
    author: 'David Schwartz',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Inner Engineering',
    author: 'Sadhguru Jaggi Vasudev',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Mystic Journeys',
    author: 'QuietZen Studios',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Cutting Through Spiritual Materialism',
    author: 'Chögyam Trungpa',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Journey of Awakening',
    author: 'Ram Dass',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Siddhartha',
    author: 'Hermann Hesse',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Zen Mind, Beginners Mind',
    author: 'Shunryu Suzuki',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Seven Spiritual Laws of Success',
    author: 'Deepak Chopra',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Most Important Thing',
    author: 'Howard Marks',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Four Pillars of Investing',
    author: 'William Bernstein',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Intelligent Investor Rev Ed.',
    author: 'Benjamin Graham',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'One Up On Wall Street',
    author: 'Peter Lynch',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Little Book That Still Beats the Market',
    author: 'Joel Greenblatt',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Rule #1',
    author: 'Phil Town',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Mind of Money',
    author: 'Justin Perry',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Blue Ocean Strategy',
    author: 'W. Chan Kim, Renee Mauborgne',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Deep Work',
    author: 'Cal Newport',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Unfu*k Yourself',
    author: 'Gary John Bishop',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The 48 Laws of Power',
    author: 'Robert Greene',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Extreme Ownership',
    author: 'Jocko Willink, Leif Babin',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'Essentialism',
    author: 'Greg McKeown',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'How to Win Friends & Influence People',
    author: 'Dale Carnegie',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Founders Dilemma',
    author: 'Noam Wasserman',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Launch Pad',
    author: 'Randall Stross',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Game of Life and How to Play It',
    author: 'Florence Scovel Shinn',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Master Key System',
    author: 'Charles F. Haanel',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  }, {
    name: 'The Comprehensive ENFP Survival Guide',
    author: 'Heidi Priebe',
    sash: 'sash-success',
    sash_icon: 'bookmark',
    sash_text: 'New',
    img: 'assets/images-demo/products/watch-silver.png',
  },
];

class Page extends React.Component {
  render() {
    return (
      <section className="container-fluid container-mw-xxl no-breadcrumb chapter">
        <QueueAnim type="bottom" className="ui-animate row">
          {
            books.map((book, i) =>
              <div className="col-xl-3 col-lg-6 mb-4" key={( i + 1).toString()}>
                <div className="item-card">
                  <div className={classnames('sash sash-triangle-right', book.sash)}>
                    <div>
                      <i className="material-icons">{book.sash_icon}</i>
                      <span className="sash-text">{book.sash_text}</span>
                    </div>
                  </div>
                  <a style={{padding: '30px 0px'}} href={'www.google.com'} className="card__image">
                    <img alt="book" src={book.img} />
                  </a>
                  <div className="card__body card-white">
                    <div className="card__title">
                      <strong>{book.name}</strong>
                      <br />
                      <span>by {book.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </QueueAnim>
      </section>
    );
  }
}

export default Page;
