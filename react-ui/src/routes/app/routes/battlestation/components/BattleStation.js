import React from 'react';
import QueueAnim from 'rc-queue-anim';

const imgLeft = {
  backgroundImage: 'url(https://camo.githubusercontent.com/329085cdd6ab9fb734d3ccd11d84498f1cf0b328/68747470733a2f2f73636f6e74656e742e666d6e6c352d312e666e612e666263646e2e6e65742f762f74312e302d392f37313138383737385f31303231373732353231323933363932335f363734343736383934363032363537373932305f6f2e6a70673f5f6e635f6361743d313130265f6e635f6f633d41516e564e7873383077694953317635424c746b6a636362555f5179543574695955455841673937474957794b66726f6f4554727479306a3736305f724e5a6e785630265f6e635f68743d73636f6e74656e742e666d6e6c352d312e666e61266f683d6663343961366638383462613130313039666533656333376639383632666432266f653d3544463033334532)'
};
const imgRight = {
  backgroundImage: 'url(https://camo.githubusercontent.com/7383900dd4cf72eb9dab359dad3d49016faa8356/68747470733a2f2f73636f6e74656e742e666d6e6c352d312e666e612e666263646e2e6e65742f762f7433312e302d382f32373632393033395f31303231333235343432343737303031335f373039363938333538313337313137323630305f6f2e6a70673f5f6e635f6361743d313036265f6e635f6f633d41516c616d3532794f384862356f4e344844586b79337465345479574275686334504b754e4e55667638426747425f4538574d364b7346534b6c646b6b2d4745746138265f6e635f68743d73636f6e74656e742e666d6e6c352d312e666e61266f683d3539663938303630313166353333393331373465373963316430623632333665266f653d3544463132353841)'
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
          <h2>2019 Co-Working Space Setup</h2>
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
          <h2>2018 Home Office Setup</h2>
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
          <h2>2014 Condo Office Setup</h2>
        </div>
      </div>
    </div>
  </div>
);

const BattleStation = () => (
  <section className="chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><Section1 /></div>
      <div key="2"><Section2 /></div>
      <div key="3"><Section3 /></div>
    </QueueAnim>
  </section>
);

export default BattleStation;
