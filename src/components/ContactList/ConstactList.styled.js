import styled from 'styled-components';

export const Button = styled.button`
  display: inline flex;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[1]}px;
  margin-left: ${p => p.theme.space[3]}px;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.black};
  }
`;
export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[2]}px;
`;
