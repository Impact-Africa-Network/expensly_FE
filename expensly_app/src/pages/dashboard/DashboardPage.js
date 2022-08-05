import React from 'react'
import DashboardLayout from '../../layout/dashboard/DashboardLayout'

export default function DashboardPage() {
  return (
    <>
        <DashboardLayout 
            pageComponent={<p>Dashboard Component here</p>}
        
        />
    </>
  )
}
