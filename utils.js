export const uid = () => Math.random().toString(36).slice(2, 10)

export const fmt = (d) =>
  d ? new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '—'

export const isOverdue = (d) => d && new Date(d) < new Date()

export const STATUS_LABELS = { todo: 'To Do', 'in-progress': 'In Progress', done: 'Done' }
export const STATUS_COLORS = { todo: '#6366f1', 'in-progress': '#f59e0b', done: '#10b981' }
export const PRIORITY_COLORS = { high: '#ef4444', medium: '#f59e0b', low: '#3b82f6' }

export const PROJECT_COLORS = [
  '#7C3AED','#0891B2','#059669','#DC2626',
  '#D97706','#DB2777','#6366f1','#0f172a',
]

export const STORAGE_KEY = 'ttm_state_v2'

export const SEED_DATA = {
  users: [
    { id: 'u1', name: 'Alice Admin', email: 'alice@acme.com', password: 'admin123', role: 'admin' },
    { id: 'u2', name: 'Bob Builder', email: 'bob@acme.com', password: 'member123', role: 'member' },
    { id: 'u3', name: 'Carol Chen', email: 'carol@acme.com', password: 'member123', role: 'member' },
  ],
  projects: [
    {
      id: 'p1', name: 'Website Redesign',
      description: 'Overhaul the company website with modern design',
      ownerId: 'u1', members: ['u1','u2','u3'], color: '#7C3AED',
      createdAt: new Date(Date.now() - 7 * 864e5).toISOString(),
    },
    {
      id: 'p2', name: 'Mobile App v2',
      description: 'Launch iOS & Android apps with new features',
      ownerId: 'u1', members: ['u1','u3'], color: '#0891B2',
      createdAt: new Date(Date.now() - 3 * 864e5).toISOString(),
    },
  ],
  tasks: [
    { id: 't1', projectId: 'p1', title: 'Design wireframes', description: 'Create low-fi wireframes for all pages', assigneeId: 'u2', status: 'done',        priority: 'high',   dueDate: new Date(Date.now() - 2 * 864e5).toISOString(), createdAt: new Date(Date.now() - 6 * 864e5).toISOString() },
    { id: 't2', projectId: 'p1', title: 'Build component library', description: 'Reusable React components with Storybook', assigneeId: 'u3', status: 'in-progress', priority: 'high',   dueDate: new Date(Date.now() + 1 * 864e5).toISOString(), createdAt: new Date(Date.now() - 5 * 864e5).toISOString() },
    { id: 't3', projectId: 'p1', title: 'Write homepage copy', description: 'Marketing copy for the new homepage', assigneeId: 'u2', status: 'todo',        priority: 'medium', dueDate: new Date(Date.now() + 3 * 864e5).toISOString(), createdAt: new Date(Date.now() - 4 * 864e5).toISOString() },
    { id: 't4', projectId: 'p1', title: 'SEO audit',            description: 'Full technical SEO audit & fixes',     assigneeId: 'u1', status: 'todo',        priority: 'low',    dueDate: new Date(Date.now() - 1 * 864e5).toISOString(), createdAt: new Date(Date.now() - 3 * 864e5).toISOString() },
    { id: 't5', projectId: 'p2', title: 'API integration',      description: 'Connect all REST endpoints to UI',     assigneeId: 'u3', status: 'in-progress', priority: 'high',   dueDate: new Date(Date.now() + 2 * 864e5).toISOString(), createdAt: new Date(Date.now() - 2 * 864e5).toISOString() },
    { id: 't6', projectId: 'p2', title: 'Push notifications',   description: 'Implement FCM push notifications',     assigneeId: 'u1', status: 'todo',        priority: 'medium', dueDate: new Date(Date.now() + 5 * 864e5).toISOString(), createdAt: new Date(Date.now() - 1 * 864e5).toISOString() },
  ],
}

export function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return null
}

export function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {}
}
