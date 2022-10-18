import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { peoplePathNames } from '../../routes';
import People from '../People';
import PersonDetails from '../PersonDetails';

function PeopleRouter() {
  return (
    <Routes>
      <Route path={peoplePathNames.popularPeople} element={<People />} />
      <Route path=':credentials' element={<PersonDetails />} />
    </Routes>
  );
}

export default PeopleRouter;
