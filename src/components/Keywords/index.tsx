import React from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { useRetrieveIdFromLocation } from '../../common/hooks';
import {
  useGetTVKeywordsQuery,
  useGetMovieKeywordsQuery,
} from '../../app/store/api';
import { BorderRadiuses, ThemeColors } from '../../common/styles';
import {
  MovieKeywordsResults,
  TVKeywordsResults,
} from '../../app/TMDBAPIInterfaces';

const keywordStyles = css({
  display: 'inline-block',
  padding: '5px 10px',
  margin: '10px 10px 0 0',
  backgroundColor: ThemeColors.lightGray,
  borderRadius: BorderRadiuses.small,
});

interface KeywordsProps {
  mediaType: 'tv' | 'movie';
}

function isTVKeywords(
  resp: MovieKeywordsResults | TVKeywordsResults
): resp is TVKeywordsResults {
  return (resp as TVKeywordsResults).results !== undefined;
}

function Keywords({ mediaType }: KeywordsProps) {
  const tvShowId = useRetrieveIdFromLocation();
  const queries = {
    movie: useGetMovieKeywordsQuery,
    tv: useGetTVKeywordsQuery,
  } as {
    [Key in KeywordsProps['mediaType']]: (id: number) => Omit<
      ReturnType<typeof useGetMovieKeywordsQuery>,
      'data'
    > & {
      data?: MovieKeywordsResults | TVKeywordsResults;
    };
  };

  const { data } = queries[mediaType](tvShowId);
  const { t } = useTranslation('details');
  if (!data) {
    return null;
  }

  const keywords = isTVKeywords(data) ? data.results : data.keywords;
  return (
    <div>
      <h5>{t('keywords')}</h5>
      {keywords.map(({ id, name }) => (
        <span key={id} css={keywordStyles}>
          {name}
        </span>
      ))}
    </div>
  );
}

export default Keywords;
