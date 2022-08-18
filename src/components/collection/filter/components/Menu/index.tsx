import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';
import { css } from '@emotion/react';
import { FilterState, ReducerAction, ActionTypes } from '../../state';
import SortTypes from '../SortTypes';
import Dates from '../Dates';
import Genres from '../Genres';
import Languages from '../Languages';
import UserRatings from '../UserRatings';
import { ThemeColors, BorderRadiuses } from '../../../../../common/styles';
import arrowRight from './assets/img/arrowRight.png';
import arrowDown from './assets/img/arrowDown.png';

interface MenuProps {
  state: FilterState;
  dispatch: React.Dispatch<ReducerAction>;
}

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

function Menu({ state, dispatch }: MenuProps) {
  const { t } = useTranslation('collection');
  return (
    <div css={filterWrapperStyles}>
      <Accordion
        defaultActiveKey={['0']}
        alwaysOpen
        css={accordionCustomStyles}
      >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>{t('filter.sort.name')}</Accordion.Header>
          <Accordion.Body>
            <SortTypes dispatch={dispatch} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>{t('filter.filters.name')}</Accordion.Header>
          <Accordion.Body>
            <Dates dispatch={dispatch} dates={state.dates} />
            <Genres
              selectedGenres={state.genres}
              addGenre={(genre: number) =>
                dispatch({ type: ActionTypes.addGenre, payload: genre })
              }
              deleteGenre={(genre: number) =>
                dispatch({ type: ActionTypes.deleteGenre, payload: genre })
              }
            />
            <Languages
              currentLanguage={state.language}
              setLanguage={(lang: string) =>
                dispatch({ type: ActionTypes.selectLanguage, payload: lang })
              }
            />
            <UserRatings
              currentRate={state.rate}
              setRate={(rate: number) =>
                dispatch({ type: ActionTypes.setRate, payload: rate })
              }
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Menu;
