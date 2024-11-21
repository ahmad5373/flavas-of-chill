import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Content from './pages/Content'
import Users from './pages/Users'
import UserView from './pages/UserView'
import Music from './pages/Music'
import SubscriptionsPlans from './pages/Subscriptions'
import Profile from './pages/Profile'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='musics' element={<Music />} />
          <Route path='subscriptions' element={<SubscriptionsPlans />} />
          <Route path='content' element={<Content />} />
          <Route path='profile' element={<Profile />} />
          <Route path='users' element={<Users />} />
          <Route path='users/view' element={<UserView />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
