import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilAddressBook,
  cilDollar,
  cilGroup,
  cilInfo,
  cilLockLocked,
  cilSettings,
  cilSpeedometer,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Admin',
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Licenses',
    to: '/licenses',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Invoices',
    to: '/invoices',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/users',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Outhers',
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'About',
    to: '/about',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]

export default _nav
