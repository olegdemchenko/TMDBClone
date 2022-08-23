import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdatePageAfterScroll } from '../../common/hooks';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import CenteredContainer from '../CenteredContainer';
import Spinner from './components/Spinner';
import ErrorMessage from '../ErrorMessage';
import Button from './components/Button';
import Filter from './components/Filter/components/Filter';

interface CategoryContentProps {
  heading: string;
  sendQuery: SendQuery;
}

function CategoryContent({ heading, sendQuery }: CategoryContentProps) {
  const { t } = useTranslation('collection');
  const [isLoadingActive, activateLoading] = useState<boolean>(false);
  const page = useUpdatePageAfterScroll(isLoadingActive);
  const { isError, isFetching, error, data } = sendQuery(page);
  return (
    <CenteredContainer>
      {isFetching ? <Spinner /> : null}
      {isError ? (
        <ErrorMessage
          message={error?.message ?? 'Unknown error has happened.'}
        />
      ) : null}
      <Filter heading={heading} list={data} />
      {isLoadingActive ? null : (
        <Button text={t('loadMore')} onClick={() => activateLoading(true)} />
      )}
    </CenteredContainer>
  );
}

export default CategoryContent;
