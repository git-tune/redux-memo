import React from 'react';
import styled from 'styled-components';
import Memo from '../molecules/Memo';
import AddForm from '../molecules/AddForm';
import FindForm from '../molecules/FindForm';
import HistoryForm from '../molecules/HistoryForm';
import { colors } from '../../styles/variable';

const Container = styled.div`
  background: ${colors.main};
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.black};
  margin: 50px 0 0 0;
`;

const SubTitle = styled.p`
  font-size: 15px;
  margin-bottom: 30px;
`;

const Table = styled.table`
  margin: 5px auto 20px auto;
`;

const MemoApp = () => {
  return (
    <Container>
      <Title>Redux Memo</Title>
      <SubTitle>This App for studying Redux-Persist</SubTitle>
      <AddForm />
      <Table>
        <tbody>
          <tr>
            <td>
              <FindForm />
            </td>
            <td>
              <HistoryForm />
            </td>
          </tr>
        </tbody>
      </Table>
      <Memo />
    </Container>
  );
};

export default MemoApp;
