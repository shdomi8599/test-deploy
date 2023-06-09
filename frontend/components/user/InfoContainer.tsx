import { ReactNode, useState } from 'react';
import styled from 'styled-components';
import AuthInput from '../authAction/AuthInput';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ lastItem }: { lastItem: Boolean }) =>
    lastItem
      ? 'padding-bottom: 0px'
      : 'border-bottom: 1px solid rgba(0, 0, 0, 0.3)'}
`;
const KeyContainer = styled.div`
  width: 100px;
`;
const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-start;
`;
interface IProps {
  keyNode: ReactNode;
  contentNode: ReactNode;
  lastItem?: Boolean;
}
export default function InfoContainer({
  keyNode,
  contentNode,
  lastItem = false,
}: IProps) {
  return (
    <Wrapper lastItem={lastItem}>
      <KeyContainer className="nnum-bold">{keyNode}</KeyContainer>
      <ContentContainer className="nnum-bold">{contentNode}</ContentContainer>
    </Wrapper>
  );
}
