
import './App.css'
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom'
import UploadPage from './pages/upload-page'
import DownloadPage from './pages/download-page'

function App() {
  return (
  <>
  <BrowserRouter>
      <Routes>
      <Route path='/' element = {<UploadPage/>}  ></Route>
      <Route path='/:id' element = {<DownloadPage/>}  ></Route>
      </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
