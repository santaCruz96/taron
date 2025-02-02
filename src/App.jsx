import ScrollProvider from './components/contexts/ScrollProvider';
import { MenuProvider } from './components/contexts/MenuProvider';
import { Lenis } from '@studio-freight/react-lenis';
import GlobalStyles from './components/GlobalStyles';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import FirstSection from './components/FirstSection/FirstSection';
import AboutSection from './components/AboutSection/AboutSection';
import SliderSection from './components/SliderSection/SliderSection';
import InterludeSection from './components/InterludeSection/InterludeSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import HostsSection from './components/HostsSection/HostsSection';
import AbbreviationSection from './components/AbbreviationSection/AbbreviationSection';
import OriginsSection from './components/OriginsSection/OriginsSection';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <ScrollProvider>
      <MenuProvider>
      <Lenis
        root
        options={{ smooth: true }}
      >
        <GlobalStyles />
        <Header name={'header'} />
        <Menu />
        <FirstSection />
        <AboutSection />
        <SliderSection
          order={1}
          name={'first-slider'}
        />
        <InterludeSection />
        <SliderSection
          order={2}
          name={'second-slider'}
          second={true}
        />
        <ReviewsSection />
        <SliderSection
          order={3}
          name={'third-slider'}
          third={true}
        />
        <HostsSection name={'hosts'} />
        <AbbreviationSection/>
        <OriginsSection/>
        <Footer name={'footer'} />
      </Lenis>
      </MenuProvider>
    </ScrollProvider>
  )
}

export default App;