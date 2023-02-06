import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import GlobalStyles from './components/styles/Global';
import content from './content';
import Card from './components/Card';
import Section from './components/Section';
import Banner from './components/Banner';
import Footer from './components/Footer';

const theme = {
  colors: {
    primary: 'hsl(322, 100%, 66%)',
    paleCyan: ' hsl(193, 100%, 96%)',
    darkCyan: 'hsl(192, 100%, 9%)',
    grayishBlue: 'hsl(208, 11%, 55%)',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Hero />
      <Section>
        {content.map(item => (
          <Card key={item.id} {...item} />
        ))}
      </Section>
      <Banner />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
