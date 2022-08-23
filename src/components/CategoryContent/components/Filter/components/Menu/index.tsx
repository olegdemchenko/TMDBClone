import React from 'react';
import { useTranslation } from 'react-i18next';
import Accordion from 'react-bootstrap/Accordion';

import { FilterState, ReducerAction, ActionTypes } from '../../state';
import SortTypes from '../SortTypes';
import Dates from '../Dates';
import Genres from '../Genres';
import Languages from '../Languages';
import UserRatings from '../UserRatings';
import { filterWrapperStyles, accordionCustomStyles } from './styles';

interface MenuProps {
  state: FilterState;
  dispatch: React.Dispatch<ReducerAction>;
}

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
