import {
  Routes, Route, NavbarDashboard, Sidebar, FooterDashboard, Main
} from '../import'

function Dashboard() {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarDashboard />
      <Sidebar />
      <Routes>
        <Route exact path='/' element={<Main />}></Route>
      </Routes>
      <FooterDashboard className='mt-auto' />
    </div>
  )
}

export default Dashboard