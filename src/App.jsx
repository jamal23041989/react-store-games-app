import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'

import { HomePage } from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
