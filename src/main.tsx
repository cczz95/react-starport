import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'virtual:windi.css'
import App from './App'
//TODO: 根据proxyEl获取到FloatContainer应该所在的位置

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
)
