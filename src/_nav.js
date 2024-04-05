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
  ,
  {
    component: CNavTitle,
    name: 'Outhers',
  },
  {
    component: CNavItem,
    name: 'Table',
    to: '/table',
    icon: <CIcon icon={cilViewColumn} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Form',
    to: '/form',
    icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'About',
    to: '/theme/typography',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
]

export default _nav
