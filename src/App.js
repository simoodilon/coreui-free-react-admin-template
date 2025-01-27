import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import { AuthProvider } from './views/authcontext/AuthContext'

import ProtectedRoute from './views/authcontext/ProtectedRoute'
import store from './Redux/Store'
import { Provider } from 'react-redux'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <Suspense fallback={loading}>
              <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/404" element={<Page404 />} />
                <Route exact path="/500" element={<Page500 />} />

                <Route
                  path="*"
                  element={
                    <ProtectedRoute>
                      <DefaultLayout />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    )
  }
}

export default App

// import React, { Component, Suspense } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './scss/style.scss'
// import { AuthProvider } from './views/authcontext/AuthContext'

// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>
//   </div>
// )

// // Containers
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// // Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// class App extends Component {
//   render() {
//     return (
//       <AuthProvider>
//         <BrowserRouter>
//           <Suspense fallback={loading}>
//             <Routes>
//               <Route exact path="/login" name="Login Page" element={<Login />} />
//               <Route exact path="/register" name="Register Page" element={<Register />} />
//               <Route exact path="/404" name="Page 404" element={<Page404 />} />
//               <Route exact path="/500" name="Page 500" element={<Page500 />} />

//               <Route path="*" name="Home" element={<DefaultLayout />} />
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//       </AuthProvider>
//     )
//   }
// }

// export default App
