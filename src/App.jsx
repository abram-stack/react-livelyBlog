import './App.css'
// import Header from './components/header/Header'
import ArticlePage from './pages/Article/ArticlePage'
import Homepage from './pages/Homepage/Homepage'
// import Login from './pages/Login/Login'
import Write from './pages/Write/Write'
import { BrowserRouter, Routes, Route}from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login/Login'
import NotFound from './components/NotFound'
import AuthRequired from './components/AuthRequired'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='article/:id' element={<ArticlePage />} />

          <Route path='login' element={<Login />} />
        </Route>

        {/* BELOW: required Auth */}
        <Route element={<AuthRequired/>}>
          <Route path='write' element={<Write />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
