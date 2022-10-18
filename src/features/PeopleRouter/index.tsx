import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { pathsSegments } from '../../routes';
import People from '../People';
import PersonDetails from '../PersonDetails';

function PeopleRouter() {
  return (
    <Routes>
      <Route path={pathsSegments.popularPeople} element={<People />} />
      <Route path=':credentials' element={<PersonDetails />} />
    </Routes>
  );
}

export default PeopleRouter;
