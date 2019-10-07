import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TypeScale from './TypeScale';
import Media from './Media';

const About = () => (
  <section >
    <article className="article" className="container-fluid col-md-10 ">
      <h2 className="article-title">Welcome to My Page</h2>
      <div className="box box-transparent">
        <div className="box-body p-0">
          <div className="row">
            <div className="col-xl-4">
              <Media />
            </div>
            <div className="col-xl-8">              
              <div className="box box-default">
                <div className="box-header">What to put here?</div>
                <div className="box-body">

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula eros quam, vel elementum erat vulputate eu. Sed efficitur turpis felis. Cras a elit quis erat porttitor aliquet et vitae mauris. Vivamus nisl nisl, vulputate sed erat eu, pulvinar efficitur lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Nam interdum ligula sit amet sapien scelerisque rutrum. Nullam sed dolor ligula. Fusce feugiat non neque at elementum. Nullam sodales, velit convallis dapibus facilisis, ipsum enim ornare nisi, et venenatis diam urna eu dui.</p>
                  <p>Duis hendrerit purus ac rutrum fermentum. Nam a nibh ante. Suspendisse potenti. Ut blandit odio sem, nec fringilla dolor volutpat sit amet. Fusce non sapien sit amet ligula eleifend sagittis et et sapien. Integer viverra rutrum pellentesque. Ut eget mauris tincidunt, fringilla elit non, tristique mi. Curabitur volutpat lacus felis, nec commodo leo dictum sed. Sed vitae tellus blandit, cursus erat ut, lacinia magna. Mauris pulvinar velit lorem, ac ullamcorper urna varius eu.</p>
                  <p>Mauris vulputate, quam ac hendrerit dapibus, ipsum est porttitor nunc, eu viverra ipsum dui sit amet velit. Maecenas eget mi et velit pellentesque faucibus id eget ipsum. Quisque eget mi arcu. Nulla porta lobortis orci, congue cursus arcu pellentesque vitae. Sed mi dolor, dictum quis feugiat ac, faucibus eget lectus. Nulla facilisi. Quisque vestibulum vitae lectus in fermentum. Proin mollis quam quis pretium bibendum. Phasellus imperdiet, mauris imperdiet maximus tincidunt, turpis nulla ornare elit, in varius metus dolor at enim. Aliquam interdum enim neque, eget consequat felis imperdiet sed. Vivamus bibendum magna dui, vel tincidunt sapien volutpat eget. Vestibulum quis tortor ante. Donec imperdiet ligula et erat mattis maximus. Etiam placerat ex in eros ornare finibus. Integer eu velit sapien.</p>
                  <p>Integer facilisis ex consequat est egestas, nec vehicula purus elementum. Phasellus finibus est nec tortor porta malesuada. Cras sollicitudin nibh tellus, eget semper magna finibus eget. Maecenas non blandit turpis. Aliquam sem lorem, pulvinar quis enim ut, condimentum ullamcorper lectus. Etiam congue sem ligula, eu porttitor felis posuere et. Maecenas eros nisi, ullamcorper ornare neque at, volutpat facilisis sem. Donec eget gravida dolor. Mauris eu enim tempor, tempus tellus egestas, pharetra lectus. Vestibulum semper in neque convallis tincidunt. Pellentesque fringilla malesuada massa, et volutpat ligula pellentesque eget. Quisque varius egestas orci, vitae placerat ante luctus vel.</p>

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
  <section className="container-fluid container-mw-xl chapter">
    <QueueAnim type="bottom" className="ui-animate">
      <div key="1"><About /></div>
    </QueueAnim>
  </section>
);

export default Page;

