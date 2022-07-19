import React, { useReducer, Reducer } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/react';
import {
  FilterState,
  initialState,
  reducer,
  ReducerAction,
} from '../state';
import {
  ThemeColors,
  BorderRadiuses,
} from '../../../../common/styles';
import arrowRight from '../../../../assets/img/arrowRight.png';
import arrowDown from '../../../../assets/img/arrowDown.png';
import SortTypes from './SortTypes';
import Dates from './Dates';
import Genres from './Genres';
import Languages from './Languages';
import AgeLimitations from './AgeLimitations';
import UserRatings from './UserRatings';
import { MovieListItem } from '../../../../app/APIInfo';
import GalleryItemsList from '../../../gallery/GalleryItemsList';
import Container from './Container';
import filter from '../filter';

const filterWrapperStyles = css({
  width: 300,
  paddingRight: 25,
  flexShrink: 0,
});

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

interface FilterProps {
  heading: string;
  list: MovieListItem[];
}

function Filter({
  heading,
  list,
}: FilterProps) {
  const { t } = useTranslation('collection');
  const [
    state,
    dispatch,
  ] = useReducer<Reducer<FilterState, ReducerAction>>(reducer, initialState);

  return (
    <Container heading={heading}>
      <>
        <div css={filterWrapperStyles}>
          <Accordion defaultActiveKey={['0']} alwaysOpen css={accordionCustomStyles}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{t('filter.sort.name')}</Accordion.Header>
              <Accordion.Body>
                <SortTypes dispatch={dispatch} />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{t('filter.filters.name')}</Accordion.Header>
              <Accordion.Body>
                <Dates
                  dispatch={dispatch}
                  dates={state.dates}
                />
                <Genres />
                <Languages />
                <AgeLimitations />
                <UserRatings />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <GalleryItemsList
          mode="multiline"
          heading={heading}
          list={filter(state, list)}
        />
      </>
    </Container>
  );
}

export default Filter;
