import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

// Sesame paths
const GenerateFile = React.lazy(() => import('../views/GenerateFile/GenerateFile'))
const UserManagement = React.lazy(() => import('../views/usermanagement/UserManagement'))
const Profile = React.lazy(() => import('../views/profile/Profile'))
const Corporation = React.lazy(() => import('../views/administration/corporation/Corporation'))
const Cashier = React.lazy(() => import('../views/administration/cashier/Cashier'))
const Agence = React.lazy(() => import('../views/administration/agence/Agence'))
// const SettHeading = React.lazy(() => import('../views/settings/settheading/SettHeading'))

const Widgets = React.lazy(() => import('../views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'LogOut' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Sesame Paths
  { path: '/GenerateFile/GenerateFile', name: 'GenerateFile', element: GenerateFile },
  { path: '/usermanagement/UserManagement', name: 'UserManagement', element: UserManagement },
  { path: '/profile/Profile', name: 'Profile', element: Profile },
  {
    path: '/administration/corporation',
    name: 'Administration / Corporation',
    element: Corporation,
  },
  {
    path: '/administration/cashier',
    name: 'Administration / Cashier',
    element: Cashier,
  },
  {
    path: '/administration/agence',
    name: 'Administration / Agence',
    element: Agence,
  },

  { path: '/widgets', name: 'Widgets', element: Widgets },

  // { path: '/settings/settheading', name: 'SettHeading', element: SettHeading },
]

export default routes
