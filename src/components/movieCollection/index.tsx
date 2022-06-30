import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUpdatePageAfterScroll } from '../../common/hooks';
import { SendQuery } from '../../common/hooks/useCachedQueryData';
import Wrapper from '../gallery/GalleryWrapper';
import Spinner from './spinner';
import ErrorMessage from './ErrorMessage';
import Button from './Button';
import GalleryItemsList from '../gallery/GalleryItemsList';

interface MovieCollectionProps {
  heading: string,
  sendQuery: SendQuery
}

function MovieCollection({
  heading,
  sendQuery,
}: MovieCollectionProps) {
  const { t } = useTranslation('movieCollection');
  const [isLoadingActive, activateLoading] = useState<boolean>(false);
  const updatedPage = useUpdatePageAfterScroll();
  const page = isLoadingActive ? updatedPage : 1;
  const {
    isError,
    isFetching,
    error,
    data,
  } = sendQuery(page);
  return (
    <Wrapper mode="screen">
      { isFetching ? <Spinner /> : null }
      { isError ? <ErrorMessage message={error?.message ?? 'Unknown error has happened.'} /> : null }
      <h3 className="m-0 pb-4">{heading}</h3>
      <GalleryItemsList
        mode="multiline"
        heading={heading}
        list={data}
      />
      { isLoadingActive ? null : <Button text={t('loadMore')} onClick={() => activateLoading(true)} /> }
    </Wrapper>
  );
}

export default MovieCollection;
