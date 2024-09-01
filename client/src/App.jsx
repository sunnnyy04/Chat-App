import {React ,Suspense,lazy}from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import ProtectionRoute from './components/auth/ProtectionRoute';
import { LayoutLoaders } from './components/layout/Loaders';
const Home =lazy(()=>
  import("./pages/Home")
);
const Chat =lazy(()=>
  import("./pages/Chat")
);
const Groups=lazy(()=>
  import("./pages/Groups")
);
const Login=lazy(()=>
  import("./pages/Login")
);
const NotFound=lazy(()=>import("./pages/NotFound"))
const user = true

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><LayoutLoaders/></div>}>
      <Routes>
        <Route element={<ProtectionRoute user={user}/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/Chat/:chatId' element={<Chat/>}/>
          <Route path='/groups' element={<Groups/>}/>
        </Route>
        <Route path='/login' element={<ProtectionRoute user={!user} redirect='/'>
          <Login/>
        </ProtectionRoute>}/>
        <Route path='*' element={<NotFound/>}/>




      </Routes>
    
      </Suspense>
    </BrowserRouter>
  )
}

export default App
