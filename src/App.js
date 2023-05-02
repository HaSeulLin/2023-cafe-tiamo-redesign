import './App.css';
// 라우터를 가져오기 위해 router-dom에서 컴포넌트 가져옴
import { Routes, Route } from 'react-router-dom';

import { Mobile } from './components/MobilePc';
import { Pc } from './components/MobilePc';

// 각각의 페이지(하나의 주소에 보일 컴포넌트)
import Home from './page/Home';
import About from './page/About';
import Menu from './page/Menu';
import Shop from './page/Shop';
import Franchise from './page/Franchise';
import Community from './page/Community';
import ScrollCode from './page/ScrollCode';

import HeaderLink from './components/HeaderLink';
import Footer from './components/Footer';

import { DataProvider } from './context/DataContext';
import MenuContent from './page/MenuContent';
import MenuDetailPage from './page/MenuDetailPage';

function App() {
  return (
    <>
      <Mobile>
        <div className='all-page'>
        <DataProvider>
            <HeaderLink />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />}>
              <Route path='/menu/:menus' element={<MenuContent />}>
                <Route path='/menu/:menus/:sub' element={<MenuDetailPage />}/>
              </Route>
            </Route>
            <Route path='/shop' element={<Shop />} />
            <Route path='/franchise' element={<Franchise />} />
            <Route path='/community' element={<Community />} />
            <Route path='/scroll' element={<ScrollCode />} />          
          </Routes>
          <Footer />
        </DataProvider>
      </div>
      </Mobile>
      <Pc>
        <div className='all-page'>
          <DataProvider>
              <HeaderLink />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/menu' element={<Menu />}>
                <Route path='/menu/:menus' element={<MenuContent />}>
                  <Route path='/menu/:menus/:sub' element={<MenuDetailPage />}/>
                </Route>
              </Route>
              <Route path='/shop' element={<Shop />} />
              <Route path='/franchise' element={<Franchise />} />
              <Route path='/community' element={<Community />} />
              <Route path='/scroll' element={<ScrollCode />} />          
            </Routes>
            <Footer />
          </DataProvider>
        </div>
      </Pc>
    </>
  );
}

export default App;
