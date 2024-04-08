import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDollar,
  cilInfo,
  cilSettings,
  cilSitemap,
  cilSpeedometer,
  cilSpreadsheet,
  cilViewColumn,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
    component: CNavGroup,
    name: 'Customers',
    to: '/base',
    icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Tenants',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Tenant Users',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Tenant Licenses',
        to: '/base/breadcrumbs',
      }
    ],
  },
  {
    component: CNavGroup,
    name: 'Bills',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bills',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Payments',
        to: '/forms/checks-radios',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/forms/floating-labels',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Customers',
    to: '/customers',
    icon: <CIcon icon={cilSitemap} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Outhers',
  },
  {
    component: CNavItem,
    name: 'About',
    to: '/about',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]

export default _nav
