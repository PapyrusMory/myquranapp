import { Outlet } from 'react-router-dom'
import DefaultLayout from './components/layout/DefaultLayout'

function App() {
  return (
    <div className='flex flex-row h-screen'>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </div>
  )
}

export default App
