import React from 'react';
import styled from 'styled-components';
import Memo from '../components/Memo';
import AddForm from '../components/AddForm';
import FindForm from '../components/FindForm';
import HistoryForm from '../components/HistoryForm';
import { colors } from '../styles/variable';

const Container = styled.div`
  background: ${colors.main};
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.black};
  margin: 50px 0 0 0;
`;

const SubTitle = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

const Table = styled.table`
  margin: 5px auto 20px auto;
  }
`;

const Top = () => {
  return (
    <Container>
      <Title>Redux TodoList</Title>
      <SubTitle>This app enables data persistence by Redux-Persist</SubTitle>
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

export default Top;
