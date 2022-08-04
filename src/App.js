import React from 'react';
import Container from './components/Container';
import styles from './App.module.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
const App = () => {
  return (
    <div className={styles.Background}>
      <Header />
      <Container>
      </Container>
      <Footer />
    </div>
  );
};

export default App;