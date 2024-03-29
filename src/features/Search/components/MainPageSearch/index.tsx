import React from 'react';
import { FormikProps } from 'formik';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';
import { searchStyles, sloganStyles, buttonStyles } from './styles';

export interface SearchFormValues {
  searchQuery: string;
}
export type SearchUIProps = Pick<
  FormikProps<SearchFormValues>,
  'handleSubmit' | 'handleChange' | 'errors'
>;

function MainPageSearch({ handleChange, handleSubmit, errors }: SearchUIProps) {
  const { t } = useTranslation('search');
  return (
    <Container fluid='lg' className='px-4' css={searchStyles}>
      <h1 className='fw-bold mb-0'>{t('main.greeting')}</h1>
      <h2 css={sloganStyles}>{t('main.slogan')}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='position-relative'>
          <Form.Control
            name='searchQuery'
            className='p-2 ps-3 border-0 rounded-pill'
            placeholder={t('common.placeholder')}
            onChange={handleChange}
            isInvalid={!!errors.searchQuery}
          />
          <Form.Control.Feedback type='invalid'>
            {errors.searchQuery}
          </Form.Control.Feedback>
          <Button
            type='submit'
            className='py-2 px-4 border-0 position-absolute top-0 end-0 rounded-pill fw-bold'
            css={buttonStyles}
          >
            {t('main.search')}
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default MainPageSearch;
