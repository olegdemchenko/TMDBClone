import React from 'react';
import { ProductionCompanies } from '../../../../../../app/TMDBAPIInterfaces';

interface CompanyProps {
  name?: ProductionCompanies['name'];
}

function Company({ name }: CompanyProps) {
  return (
    <div className='pe-4'>
      <p>{name}</p>
    </div>
  );
}

export default Company;
