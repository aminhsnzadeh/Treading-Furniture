import React from 'react';
import ReactDOM from 'react-dom/client';
import Navs from './asset/component/menu/menu';
import Heading from './asset/component/pages/head';
import About from './asset/component/pages/about';
import Rate from './asset/component/pages/rate';
import Gallery from './asset/component/pages/gallery';
import Customers from './asset/component/pages/customer';
import Slider from './asset/component/pages/slider';
import Blog from './asset/component/pages/blog';
import Contact from './asset/component/pages/footer';
import AOS from "aos"
import { useEffect } from 'react';
import '../node_modules/aos/dist/aos.css'


const Final = ()=> {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return(
    <>
        <main>
          <Navs />
          <Heading />
          <About />
          <Rate />
          <Gallery />
          <Customers />
          <Slider />
          <Blog />
          <Contact />
        </main>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Final />
);

