import React from 'react';
import styled from 'styled-components';
import Memo from '../molecules/Memo';
import AddForm from '../molecules/AddForm';
import FindForm from '../molecules/FindForm';
import DelForm from '../molecules/DelForm';
import { colors } from '../../styles/variable';

const Container = styled.div`
  background: ${colors.primary};
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
      <SubTitle>
        This App is to confirm Redux-Persist setting for achieving persistence
        of App-contents in React
      </SubTitle>
      <AddForm />
      <Table>
        <tbody>
          <tr>
            <td>
              <FindForm />
            </td>
            <td>
              <DelForm />
            </td>
          </tr>
        </tbody>
      </Table>
      <Memo />
    </Container>
  );
};

export default MemoApp;
