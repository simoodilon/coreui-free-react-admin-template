import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilSpeedometer, cilCursor } from '@coreui/icons'
import { CNavItem, CNavGroup } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavItem,
    name: 'Generate File',
    to: '/GenerateFile/GenerateFile',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavItem,
    name: 'User Management',
    to: '/usermanagement/UserManagement',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile/Profile',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },

  {
    component: CNavGroup,
    name: 'Qualitative Data',
    to: '/qualitativedata',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form 1',
        to: '/qualitativedata/form1',
      },
      {
        component: CNavItem,
        name: 'Form 2',
        to: '/qualitativedata/form2',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Administration',
    to: '/administration',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Corporation',
        to: '/administration/corporation',
      },
      {
        component: CNavItem,
        name: 'Cashier',
        to: '/administration/cashier',
      },
      {
        component: CNavItem,
        name: 'Agence',
        to: '/administration/agence',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sesame Agent',
        to: '/settings/sesameagent',
      },
      {
        component: CNavItem,
        name: 'Heading',
        to: '/settings/heading',
      },
    ],
  },
]

export default _nav
