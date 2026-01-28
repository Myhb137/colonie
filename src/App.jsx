import { useState } from 'react'
import { Dashboard } from './pages/Dashboard'
import { ReportsPage } from './pages/ReportsPage'
import { DailyProgramPage } from './pages/DailyProgramPage'
import { AnnouncementsPage } from './pages/AnnouncementsPage'
import { GroupsPage } from './pages/GroupsPage'
import { ChildrenPage } from './pages/ChildrenPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { TopBar } from './components/TopBar'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'reports':
        return <ReportsPage />
      case 'program':
        return <DailyProgramPage />
      case 'announcements':
        return <AnnouncementsPage />
      case 'groups':
        return <GroupsPage />
      case 'children':
        return <ChildrenPage />
      case 'documents':
        return <DocumentsPage />
      default:
        return <Dashboard />
    }
  }

  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen pt-20" onClick={(e) => {
      // Handle sidebar navigation clicks
      const target = e.target.closest('button[data-page]')
      if (target) {
        setCurrentPage(target.dataset.page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }}>
      <TopBar />
      {renderPage()}
    </div>
  )
}

export default App
