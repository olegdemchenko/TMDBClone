import React from 'react';
import _ from 'lodash';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import {
  MovieListItemMedia,
  PersonListItemMedia,
  TVListItemMedia,
  MediaTypes,
} from '../../../../app/TMDBAPIInterfaces';
import { capitalize } from '../../../../common/utils';
import {
  statisticsContainerStyles,
  statisticsHeaderStyles,
  categoryCountStyles,
  primaryCategoryStyles,
  categoryStyles,
} from './styles';

interface StatisticsProps {
  searchData: (MovieListItemMedia | PersonListItemMedia | TVListItemMedia)[];
}

function Statistics({ searchData }: StatisticsProps) {
  const [params] = useSearchParams();
  const { t } = useTranslation('results');
  const categories = t('categories', { returnObjects: true }) as {
    [Key in MediaTypes]: string;
  };
  const primaryMediaType = searchData[0]?.media_type ?? 'movie';
  const orderedCategoriesByPrimaryType = [
    categories[primaryMediaType],
    ..._.without(Object.values(categories), categories[primaryMediaType]),
  ];

  const categoriesCounts = {
    [categories[MediaTypes.person]]: searchData.filter(
      (elem) => elem.media_type === MediaTypes.person
    ).length,
    [categories[MediaTypes.movie]]: searchData.filter(
      (elem) => elem.media_type === MediaTypes.movie
    ).length,
    [categories[MediaTypes.tv]]: searchData.filter(
      (elem) => elem.media_type === MediaTypes.tv
    ).length,
  };

  return (
    <div className='pb-3' css={statisticsContainerStyles}>
      <h6 className='fw-bold p-4 text-white' css={statisticsHeaderStyles}>{`${t(
        'searchResults'
      )}: ${params.get('page')}`}</h6>
      {orderedCategoriesByPrimaryType.map((category, index) => (
        <div
          key={_.uniqueId()}
          className='d-flex justify-content-between px-4 py-2'
          css={css(categoryStyles, index === 0 ? primaryCategoryStyles : {})}
        >
          <span className='category-name'>{capitalize(category)}</span>
          <span className='category-count' css={categoryCountStyles}>
            {categoriesCounts[category]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Statistics;
