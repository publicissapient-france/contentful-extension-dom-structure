import React, { Component } from 'react';

class Boxes extends Component {
  render () {
    const { fields, index, indexParent } = this.props;
    return (
      <div>
        <React.Suspense fallback={<div>Loading Component...</div>}>

          {
            fields.map((option, i) => {
              switch (option) {
              case 'Title':
                return React.createElement(React.lazy(() => import('../boxes/content/Title')), { indexComponent: index, indexSection: indexParent, maxLength: 140 });

              case 'Tagline':
                return React.createElement(React.lazy(() => import('../boxes/content/Tagline')), {});
              default :
                return <span>No content-box <strong>{option}</strong> matches</span>;
              }
            })
          }
        </React.Suspense>
      </div>
    );
  }
};

export default Boxes;
