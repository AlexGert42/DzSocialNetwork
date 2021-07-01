import {Content} from './components/content/Content'
import {Header} from './components/header/Header'
import {Footer} from './components/footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import {store} from "./store/reducers";


export const App = () => {
  return (
      <BrowserRouter>
          <Header/>
          <Content/>
          <Footer/>
      </BrowserRouter>
  )
}


