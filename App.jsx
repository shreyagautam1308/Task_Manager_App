import { useState, useEffect } from 'react'
import { loadState, saveState, SEED_DATA } from './utils.js'
import AuthScreen   from './components/AuthScreen.jsx'
import Sidebar      from './components/Sidebar.jsx'
import Dashboard    from './components/Dashboard.jsx'
import ProjectsView from './components/ProjectsView.jsx'
import TasksView    from './components/TasksView.jsx'
import TeamView     from './components/TeamView.jsx'

export default function App() {
  const saved = loadState()

  const [users,       setUsers]       = useState(saved?.users    || SEED_DATA.users)
  const [projects,    setProjects]    = useState(saved?.projects || SEED_DATA.projects)
  const [tasks,       setTasks]       = useState(saved?.tasks    || SEED_DATA.tasks)
  const [currentUser, setCurrentUser] = useState(null)
  const [page,        setPage]        = useState('dashboard')
  const [activeProject, setActiveProject] = useState(null)

  // Persist to localStorage on every change
  useEffect(() => {
    saveState({ users, projects, tasks })
  }, [users, projects, tasks])

  const logout = () => {
    setCurrentUser(null)
    setPage('dashboard')
    setActiveProject(null)
  }

  const navigate = (target) => {
    setPage(target)
    if (target !== 'tasks') setActiveProject(null)
  }

  const openProject = (project) => {
    setActiveProject(project)
    setPage('tasks')
  }

  // Remove tasks belonging to deleted projects
  const handleSetProjects = (updater) => {
    setProjects(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      const ids  = new Set(next.map(p => p.id))
      setTasks(t => t.filter(task => ids.has(task.projectId)))
      return next
    })
  }

  if (!currentUser) {
    return (
      <AuthScreen
        users={users}
        setUsers={setUsers}
        onLogin={setCurrentUser}
      />
    )
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <Sidebar
        user={currentUser}
        page={page}
        onNavigate={navigate}
        onLogout={logout}
        tasks={tasks}
      />

      <main style={{ flex: 1, padding: '36px 40px', overflow: 'auto', background: '#f8fafc', minHeight: '100vh' }}>
        {page === 'dashboard' && (
          <Dashboard
            user={currentUser}
            tasks={tasks}
            projects={projects}
            users={users}
          />
        )}
        {page === 'projects' && (
          <ProjectsView
            projects={projects}
            setProjects={handleSetProjects}
            tasks={tasks}
            users={users}
            user={currentUser}
            onOpenProject={openProject}
          />
        )}
        {page === 'tasks' && (
          <TasksView
            tasks={tasks}
            setTasks={setTasks}
            projects={projects}
            users={users}
            user={currentUser}
            activeProject={activeProject}
          />
        )}
        {page === 'team' && currentUser.role === 'admin' && (
          <TeamView
            users={users}
            setUsers={setUsers}
            tasks={tasks}
            projects={projects}
            user={currentUser}
          />
        )}
      </main>
    </div>
  )
}
