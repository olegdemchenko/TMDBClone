import React from 'react';
import cn from 'classnames';
import _ from 'lodash';
import capitalize from '../../common/utils';

function Statistics() {
  const categories = ['people', 'movies', 'tv shows', 'collections', 'companies', 'keywords', 'networks'];
  return (
    <div className="pb-3 statistics">
      <h6 className="fw-bold p-4 text-white">Search Results</h6>
      {categories.map((category, index) => {
        const containerClass = cn('d-flex', 'justify-content-between', 'px-4', 'py-2', 'category', {
          primary: index === 0,
        });
        return (
          <div key={_.uniqueId()} className={containerClass}>
            <span className="category-name">{capitalize(category)}</span>
            <span className="category-count">0</span>
          </div>
        );
      })}
    </div>
  );
}

export default Statistics;
