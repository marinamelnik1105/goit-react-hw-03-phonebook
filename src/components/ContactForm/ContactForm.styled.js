import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';
export const Form = styled(FormikForm)`
  width: 400px;
  padding: 8px;
  border: 1px solid #2a30df;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
