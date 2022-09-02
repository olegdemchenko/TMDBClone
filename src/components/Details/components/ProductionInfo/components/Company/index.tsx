import React from 'react';
import { ProductionCompanies } from '../../../../../../app/TMDBAPIInterfaces';
import { imagePaths } from '../../../../../../routes';
import Logo from '../../../../../Logo';

interface CompanyProps {
  name?: ProductionCompanies['name'];
  logo?: ProductionCompanies['logo_path'];
}

function Company({ name, logo }: CompanyProps) {
  return (
    <div className='d-flex flex-column align-items-center pe-4'>
      <Logo
        width={100}
        height={100}
        imgName={logo}
        path={imagePaths.searchResIcon}
      />
      <p>{name}</p>
    </div>
  );
}

export default Company;
