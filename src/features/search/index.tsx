import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikErrors } from 'formik';
import MainPageSearch, { SearchFormValues } from './MainPageSearch';
import ResultsPageSearch from './ResultsPageSearch';

interface SearchProps {
  mode: 'main' | 'results';
}

function validate(values: SearchFormValues) {
  const errors: FormikErrors<SearchFormValues> = {};
  if (!values.searchQuery) {
    errors.searchQuery = 'Please, enter some information';
  }
  return errors;
}

function Search({ mode }: SearchProps) {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      searchQuery: '',
    },
    validate,
    onSubmit: ({ searchQuery }: SearchFormValues) => {
      navigate(`/search?query=${searchQuery}`);
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
