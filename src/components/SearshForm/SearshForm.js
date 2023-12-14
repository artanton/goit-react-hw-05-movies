import { Formik } from 'formik';
import * as Yup from 'yup';
import { Error, Icon, Input, SearchFormBtn, Wrapper } from './SearchFormStyled';


const querySchema = Yup.object().shape({
  query: Yup.string().min(3, 'Too Short!').required('Required'),
});

export const Searcher = ({onSubmit}) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={querySchema}
      onSubmit={(values, { resetForm }) => {
        const trimmedQuery = values.query.trim();
        onSubmit(trimmedQuery);
        resetForm();
      }}
    >
      <Wrapper>
        
      <Input type="text" id="query" name="query" />
          <Error name="query" component="span" />
       

          <SearchFormBtn type="submit">
          <Icon />
        </SearchFormBtn>
      </Wrapper>
    </Formik>
  );
};




