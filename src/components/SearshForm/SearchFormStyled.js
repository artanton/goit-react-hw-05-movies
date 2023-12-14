import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { IoMdSearch } from 'react-icons/io';

export const Wrapper = styled(Form)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  border-radius: 4px;

  margin-bottom: 36px;
`;

export const Input = styled(Field)`
  display: flex;
  width: 100%;
  font: inherit;
  border-radius: 4px 0 0 4px;
  font-size: 20px;
  padding: 9px 0;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchFormBtn = styled.button`
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #333;
  color: #fff;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled(IoMdSearch)`
  width: 20px;
  height: 20px;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -15px;
  color: red;
  font-size: 14px;
`;
