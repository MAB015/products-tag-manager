import { Routes, Route } from 'react-router-dom'

import './globals.css'
import Home from './pages/Home'
import Messages from './pages/Messages'
import Tickets from './pages/Tickets'
import Tags from './pages/Tags'
import Users from './pages/Users'

import { useEffect } from 'react'
import { useAppStore } from './store/store'

function App() {
  // const products = useAppStore((state) => state.products)
  const getProductsFromApi = useAppStore((state) => state.getProductsFromApi)

  useEffect(
    () => {
      getProductsFromApi()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <>
      <main className="flex h-screen w-full">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </main>
    </>
  )
}

export default App
