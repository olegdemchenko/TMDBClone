import React from 'react';
import { ProductionCountries } from '../../../../../../../../app/TMDBAPIInterfaces';

interface CountryProps {
  name?: ProductionCountries['name'];
}

function Country({ name }: CountryProps) {
  return (
    <div className='pe-4'>
      <p>{name}</p>
    </div>
  );
}

export default Country;
