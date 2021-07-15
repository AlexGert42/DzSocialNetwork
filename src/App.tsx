import {Content} from './components/content/Content'
import {Header} from './components/header/Header'
import {Footer} from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import {store} from "./store/reducers";
import HeaderContainer from "./components/header/HeaderContainer";


export const App = () => {
  return (
      <BrowserRouter>
          <HeaderContainer/>
          <Content/>
          <Footer/>
      </BrowserRouter>
  )
}


