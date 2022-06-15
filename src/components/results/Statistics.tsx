import React from 'react';
import cn from 'classnames';
import _ from 'lodash';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import {
  MovieListResultsMedia,
  PersonListResultsMedia,
  TVListResultsMedia,
  MediaTypes,
} from '../../app/APIInterfaces';
import capitalize from '../../common/utils';

interface StatisticsProps {
  searchData: (MovieListResultsMedia | PersonListResultsMedia | TVListResultsMedia)[]
}

function Statistics({
  searchData,
}: StatisticsProps) {
  const [params] = useSearchParams();
  const { t } = useTranslation('results');
  const categories = t('categories', { returnObjects: true }) as { [Key in MediaTypes]: string };
  const primaryMediaType = searchData[0]?.media_type ?? 'movie';
  const orderedCategoriesByPrimaryType = [
    categories[primaryMediaType],
    ..._.without(Object.values(categories), categories[primaryMediaType]),
  ];

  const categoriesCounts = {
    [categories[MediaTypes.person]]: searchData.filter((elem) => (
      elem.media_type === MediaTypes.person)).length,
    [categories[MediaTypes.movie]]: searchData.filter((elem) => (
      elem.media_type === MediaTypes.movie)).length,
    [categories[MediaTypes.tv]]: searchData.filter((elem) => (
      elem.media_type === MediaTypes.tv)).length,
  };

  return (
    <div className="pb-3 statistics">
      <h6 className="fw-bold p-4 text-white">{`${t('searchResults')}: ${params.get('page')}`}</h6>
      {orderedCategoriesByPrimaryType.map((category, index) => {
        const containerClass = cn('d-flex', 'justify-content-between', 'px-4', 'py-2', 'category', {
          primary: index === 0,
        });
        return (
          <div key={_.uniqueId()} className={containerClass}>
            <span className="category-name">{capitalize(category)}</span>
            <span className="category-count">{categoriesCounts[category]}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Statistics;
