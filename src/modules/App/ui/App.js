import React from 'react'
import { useRoutes } from 'hookrouter'
import MainLayout from '../../../layout/MainLayout'
import Routes from '../../../router'
import NotFoundPage from '../../../components/NotFoundPage'

const App = () => {
  const routeResult = useRoutes(Routes)
  return <MainLayout>{routeResult || <NotFoundPage />}</MainLayout>
}

export default App
