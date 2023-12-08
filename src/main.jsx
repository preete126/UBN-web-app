import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './pages/App'
import './assets/styles/index.scss'
import "bootstrap/dist/js/bootstrap.bundle.min"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const App = React.lazy(()=>import('./pages/App'))
const Login = React.lazy(()=>import('./pages/auths/login'))
const GetStarted = React.lazy(()=>import('./pages/auths/getStarted'))
const ForgotCredentials = React.lazy(()=>import('./pages/auths/forgot-credentials'))
const ResetPassword = React.lazy(()=>import('./pages/auths/reset-password'))
const RecoverUsername = React.lazy(()=>import('./pages/auths/recover-username/recover-username'))
const AccountDetails = React.lazy(()=>import('./pages/auths/recover-username/account-details'))
const OTPVerification = React.lazy(()=>import('./pages/auths/recover-username/otp-verification'))
const RecoverUsernameComplete = React.lazy(()=>import('./pages/auths/recover-username/recover-username-complete'))


const route = createBrowserRouter([
  {path:"/", element:<App/>, errorElement:<h1>Error</h1>},
  {path:"/login", element:<Login/>},
  {path:"/get-started", element:<GetStarted/>},
  {path:"/forgot-credentials", element:<ForgotCredentials/>},
  {path:"/reset-password", element:<ResetPassword/>},
  {
    path:"/recover-username", 
    element:<RecoverUsername/>, 
    children:[
      {path:"1", query:{phase:"account-details"}, element:<AccountDetails/>},
      {path:"2", query:{phase:"otp-verification"}, element:<OTPVerification/>}
    ]
  },
  {path:"/username-setup-complete", element:<RecoverUsernameComplete/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <RouterProvider router={route}/>
    </Suspense>
  </React.StrictMode>,
)
