import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { GamePage } from './pages/GamePage'
import { HomePage } from './pages/HomePage'
import { OrderPage } from './pages/OrderPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
