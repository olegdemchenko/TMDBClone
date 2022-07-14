import React, { useReducer, Reducer } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import { FilterState } from '../FilterState';
import {
  ThemeColors,
  BorderRadiuses,
} from '../../../common/styles';
import arrowRight from '../../../assets/img/arrowRight.png';
import arrowDown from '../../../assets/img/arrowDown.png';
import SortTypes from './SortTypes';
import Dates from './Dates';
import Genres from './Genres';
import Languages from './Languages';
import AgeLimitations from './AgeLimitations';
import UserRatings from './UserRatings';
import { SortAlg } from '../constants';

const accordionCustomStyles = css({
  '& .according-header': {
    fontWeight: 'bold',
  },
  '& .accordion-body': {
    padding: 0,
  },
  '& .accordion-item': {
    marginBottom: 10,
    border: `2px solid ${ThemeColors.lightGray}`,
    borderRadius: BorderRadiuses.medium,
  },
  '& .accordion-button': {
    fontWeight: 'bold',
    borderBottom: `1px solid ${ThemeColors.lightGray}`,
    '&:focus': {
      borderColor: ThemeColors.lightGray,
      boxShadow: 'none',
    },
    '&:after': {
      width: '1rem',
      height: '1rem',
      backgroundSize: '1rem',
      backgroundImage: `url(${arrowRight})`,
    },
    '&:not(.collapsed)': {
      color: 'black',
      backgroundColor: '#fff',
      boxShadow: 'none',
      '&:after': {
        backgroundImage: `url(${arrowDown})`,
      },
    },
  },
});

export type ActionTypes = 'SETSORTALG';

export type ReducerAction = {
  type: ActionTypes,
  payload: SortAlg,
};

function reducer(state: FilterState, action: ReducerAction) {
  switch (action.type) {
    case 'SETSORTALG':
      return { ...state, sortAlg: action.payload };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function Filter() {
  const { t } = useTranslation('collection');
  const [
    state,
    dispatch,
  ] = useReducer<Reducer<FilterState, ReducerAction>>(reducer, { sortAlg: null });

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen css={accordionCustomStyles}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{t('filter.sort.name')}</Accordion.Header>
        <Accordion.Body>
          <SortTypes />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>{t('filter.filters.name')}</Accordion.Header>
        <Accordion.Body>
          <Dates />
          <Genres />
          <Languages />
          <AgeLimitations />
          <UserRatings />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Filter;
