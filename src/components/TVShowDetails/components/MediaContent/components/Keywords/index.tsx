import React from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { useRetrieveIdFromLocation } from '../../../../../../common/hooks';
import { useGetTVKeywordsQuery } from '../../../../../../app/store/api';
import { BorderRadiuses, ThemeColors } from '../../../../../../common/styles';

const keywordStyles = css({
  display: 'inline-block',
  padding: '5px 10px',
  margin: '10px 10px 0 0',
  backgroundColor: ThemeColors.lightGray,
  borderRadius: BorderRadiuses.small,
});

function Keywords() {
  const tvShowId = useRetrieveIdFromLocation();
  const { data } = useGetTVKeywordsQuery(tvShowId);
  const { t } = useTranslation('details');
  if (!data) {
    return null;
  }
  return (
    <div>
      <h5>{t('keywords')}</h5>
      {data.results.map(({ id, name }) => (
        <span key={id} css={keywordStyles}>
          {name}
        </span>
      ))}
    </div>
  );
}

export default Keywords;
