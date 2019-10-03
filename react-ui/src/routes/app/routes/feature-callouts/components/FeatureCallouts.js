import React from 'react';

import QueueAnim from 'rc-queue-anim';

const imgLeft = {
  backgroundImage: 'url(https://camo.githubusercontent.com/c758a99768fc90a472e8fcea2cfc3635d50fac44/68747470733a2f2f73636f6e74656e742e666d6e6c352d312e666e612e666263646e2e6e65742f762f74312e302d392f313936363637325f31303230323335353736353739303335305f3834373333393339355f6e2e6a70673f5f6e635f6361743d313038265f6e635f6f633d41516b4e616f6a707970634c3068785f38634b68534342754f4b73504e6b3237425673755a6f304547376b79724b59577a53445267745f417857724d5a626c2d4a4573265f6e635f68743d73636f6e74656e742e666d6e6c352d312e666e61266f683d3437626166643434623238333538626566303337393465653539303063666136266f653d3544464243323441)'
};
const imgRight = {
  backgroundImage: 'url(https://camo.githubusercontent.com/c758a99768fc90a472e8fcea2cfc3635d50fac44/68747470733a2f2f73636f6e74656e742e666d6e6c352d312e666e612e666263646e2e6e65742f762f74312e302d392f313936363637325f31303230323335353736353739303335305f3834373333393339355f6e2e6a70673f5f6e635f6361743d313038265f6e635f6f633d41516b4e616f6a707970634c3068785f38634b68534342754f4b73504e6b3237425673755a6f304547376b79724b59577a53445267745f417857724d5a626c2d4a4573265f6e635f68743d73636f6e74656e742e666d6e6c352d312e666e61266f683d3437626166643434623238333538626566303337393465653539303063666136266f653d3544464243323441)'
};
const imgLeft2 = {
  backgroundImage: 'url(https://camo.githubusercontent.com/c758a99768fc90a472e8fcea2cfc3635d50fac44/68747470733a2f2f73636f6e74656e742e666d6e6c352d312e666e612e666263646e2e6e65742f762f74312e302d392f313936363637325f31303230323335353736353739303335305f3834373333393339355f6e2e6a70673f5f6e635f6361743d313038265f6e635f6f633d41516b4e616f6a707970634c3068785f38634b68534342754f4b73504e6b3237425673755a6f304547376b79724b59577a53445267745f417857724d5a626c2d4a4573265f6e635f68743d73636f6e74656e742e666d6e6c352d312e666e61266f683d3437626166643434623238333538626566303337393465653539303063666136266f653d3544464243323441)'
};

const Section1 = () => (
  <div className="feature-callout feature-content-right">
    <div className="col-12 col-md-6 feature-callout-image-pull" style={imgLeft} />
    <div className="container-fluid container-mw-xl">
      <div className="col-12 col-md-6 offset-md-6">
        <div className="callout-feature-content">
          <h4>Architecto odit fuga facere</h4>
          <div>Culpa eveniet labore cupiditate at maiores dignissimos, nesciunt quam porro accusantium velit quas? Nam nobis, deleniti inventore consequuntur quos vero voluptatum nostrum error porro mollitia, accusantium distinctio nemo expedita ipsum quisquam laboriosam</div>

        </div>
      </div>
    </div>
  </div>
);

const Section2 = () => (
  <div className="feature-callout feature-content-left">
    <div className="col-12 col-md-6 offset-md-6 feature-callout-image-pull" style={imgRight} />
    <div className="container-fluid container-mw-xl">
      <div className="col-12 col-md-6">
        <div className="callout-feature-content">
          <h4>Commodi molestiae, culpa eveniet</h4>
          <div>Culpa eveniet labore cupiditate at maiores dignissimos, nesciunt quam porro accusantium velit quas? Nam nobis, deleniti inventore consequuntur quos vero voluptatum nostrum error porro mollitia, accusantium distinctio nemo expedita ipsum quisquam laboriosam</div>

        </div>
      </div>
    </div>
  </div>
);

const Section3 = () => (
  <div className="feature-callout feature-content-right">
    <div className="col-12 col-md-6 feature-callout-image-pull" style={imgLeft2} />
    <div className="container-fluid container-mw-xl">
      <div className="col-12 col-md-6 offset-md-6">
        <div className="callout-feature-content">
          <h4>Culpa distinctio nemo</h4>
          <div>Cupiditate at maiores dignissimos, nesciunt quam porro accusantium velit quas? Nam nobis, deleniti inventore consequuntur quos vero voluptatum nostrum error porro mollitia, accusantium distinctio nemo expedita ipsum quisquam laboriosam.</div>

        </div>
      </div>
    </div>
  </div>
);

const FeatureCallouts = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Section1 /></div>
      <div key="2"><Section2 /></div>
      <div key="3"><Section3 /></div>
    </QueueAnim>
  </section>
);

export default FeatureCallouts;
