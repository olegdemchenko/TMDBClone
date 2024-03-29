import { css } from '@emotion/react';
import React from 'react';
import { ProductionCompanies } from '../../../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../../../routes';
import Logo from '../../../../../../../../components/Logo';

interface CompanyProps {
  name?: ProductionCompanies['name'];
  logo?: ProductionCompanies['logo_path'];
}

function Company({ name, logo }: CompanyProps) {
  return (
    <div className='d-flex flex-column align-items-center pe-4'>
      <div css={css({ width: 100, height: 100 })}>
        <Logo
          type='media'
          borderRadius='all'
          imgName={logo}
          path={imagePaths.searchResIcon}
          noStretch
        />
      </div>
      <p>{name}</p>
    </div>
  );
}

export default Company;
