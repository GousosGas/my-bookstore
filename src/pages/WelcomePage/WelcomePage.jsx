import React from 'react';
import Container from '@material-ui/core/Container';
import PageContainer from '../../core/components/PageContainer/PageContainer';
import BestSellerComponent from '../../components/BestSeller/view/BestSellerComponent';
import EditorsSelectionBookComponent from '../../components/EditorSelectionBook/view/EditorsSelectionBookComponent';
import BookSearchRefComponent from '../../components/BookSearchRef/BookSearchRefComponent';

const bookIds = [
  '96Myji48hMQC',
  'qdFhAwAAQBAJ',
  '9U5I_tskq9MC',
];

const WelcomePage = () => (
  <>
    <PageContainer>
      <EditorsSelectionBookComponent bookIds={bookIds} />
    </PageContainer>
    <BookSearchRefComponent />
    <Container maxWidth="lg">
      <BestSellerComponent />
    </Container>
  </>
);

WelcomePage.propTypes = {};

export default WelcomePage;
