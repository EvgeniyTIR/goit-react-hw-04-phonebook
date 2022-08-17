import styled from 'styled-components';
import { Field } from 'formik';

export const MainTitle = styled.h1`
  margin-bottom: 15px;
  font-size: ${p => p.theme.fontSizes.xl};
`;
export const Input = styled(Field)`
  font-size: ${p => p.theme.fontSizes.xm};
  margin-bottom: 15px;
  margin-right: 10px;
`;

export const Button = styled.button`
  display: inline flex;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[2]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.mt};
  margin-bottom: ${p => p.theme.space[5]}px;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.black};
  }
`;
