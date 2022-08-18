import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useFormik, FormikErrors } from 'formik';
import MainPageSearch, { SearchFormValues } from './components/MainPageSearch';
import ResultsPageSearch from './components/ResultsPageSearch';

interface SearchProps {
  mode: 'main' | 'results';
}

function validateQuery(message: string) {
  return (values: SearchFormValues) => {
    const errors: FormikErrors<SearchFormValues> = {};
    if (!values.searchQuery) {
      errors.searchQuery = message;
    }
    return errors;
  };
}

function Search({ mode }: SearchProps) {
  const navigate = useNavigate();
  const { t } = useTranslation('search');

  const formik = useFormik({
    initialValues: {
      searchQuery: '',
    },
    validate: validateQuery(t('errors.emptyQuery')),
    onSubmit: ({ searchQuery }: SearchFormValues) => {
      navigate(`/search?query=${searchQuery}&page=1`);
    },
  });
  const memoizedHandleSubmit = useCallback(formik.handleSubmit, []);
  const memoizedHandleChange = useCallback(formik.handleChange, []);
  const SearchRepr = mode === 'main' ? MainPageSearch : ResultsPageSearch;
  return (
    <SearchRepr
      handleSubmit={memoizedHandleSubmit}
      handleChange={memoizedHandleChange}
      errors={formik.errors}
    />
  );
}

export default Search;
