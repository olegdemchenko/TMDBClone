import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import { RootState } from '../../../../../../app/store/store';
import { TVApi } from '../../../../../../app/store/api';
import { imagePaths } from '../../../../../../routes';
import { useRetrieveIdFromLocation } from '../../../../../../common/hooks';
import Logo from '../../../../../Logo';

const networkWrapperStyles = css({
  width: 45,
  height: 45,
});

function Facts() {
  const tvShowId = useRetrieveIdFromLocation();
  const { data: tvShowDetails } = useSelector((state: RootState) =>
    TVApi.endpoints.getTVDetails.select(tvShowId)(state)
  );
  if (!tvShowDetails) {
    return null;
  }
  const { t } = useTranslation('details');

  return (
    <div>
      <h6>{t('status')}</h6>
      <p>{tvShowDetails.status}</p>
      <h6>{t('network')}</h6>
      <div>
        {tvShowDetails.networks.length > 0 ? (
          <div css={networkWrapperStyles}>
            <Logo
              type='media'
              imgName={tvShowDetails.networks[0].logo_path}
              borderRadius='none'
              path={imagePaths.tvPosters.networkLogo}
            />
          </div>
        ) : null}
        <h6>{t('type')}</h6>
        <p>{tvShowDetails.type}</p>
        <h6>{t('origLanguage')}</h6>
        <p>{tvShowDetails.original_language}</p>
      </div>
    </div>
  );
}

export default Facts;
