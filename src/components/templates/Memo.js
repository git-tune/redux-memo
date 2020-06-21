import React from 'react';
import styled from 'styled-components';
import Memo from '../organisms/Memo';
import AddForm from '../organisms/AddForm';
import FindForm from '../organisms/FindForm';
import DelForm from '../organisms/DelForm';

const Container = styled.div`
  text-align: center;
`;

const Table = styled.table`
  margin: 0 auto;
`;

const MemoList = styled.div`
  text-align: center;
`;

const MemoApp = () => {
  return (
    <Container>
      <h1>Memo</h1>
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
      <MemoList>
        <Memo />
      </MemoList>
    </Container>
  );
};

export default MemoApp;
