import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ProductionCompanies,
  ProductionCountries,
} from '../../../../app/TMDBAPIInterfaces';
import Company from './components/Company';
import Country from './components/Country';

interface ProductionInfoProps {
  countries?: ProductionCountries[];
  companies?: ProductionCompanies[];
}

function ProductionInfo({
  countries = [],
  companies = [],
}: ProductionInfoProps) {
  const { t } = useTranslation('details');
  return (
    <div>
      <p className='m-0 fs-5 fw-bold'>{t('companies')}</p>
      <div className='d-flex flex-wrap'>
        {companies.map(({ name, id, logo_path }) => (
          <Company key={id} name={name} logo={logo_path} />
        ))}
      </div>
      <div className='d-flex flex-wrap'>
        {countries.map(({ name, iso_3166_1 }) => (
          <Country key={iso_3166_1} name={name} />
        ))}
      </div>
    </div>
  );
}

export default ProductionInfo;
