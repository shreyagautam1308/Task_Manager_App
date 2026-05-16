# TaskFlow – Team Task Manager

A full-stack-style team task management web app with role-based access control (Admin/Member), built with React + Vite.

## 🚀 Live Demo

> Deploy to Netlify or Vercel for a free live URL (see instructions below).

---

## ✨ Features

- **Authentication** – Sign up / Sign in with email & password
- **Role-Based Access** – Admin can manage everything; Members see only their projects
- **Projects** – Create, edit, delete projects with custom colors and team members
- **Kanban Board** – Three-column task board (To Do / In Progress / Done)
- **Task Management** – Create, assign, filter, prioritize, and track tasks
- **Dashboard** – Stats overview, progress charts, overdue alerts
- **Team Management** – Invite members, change roles (Admin only)
- **Persistence** – All data saved to localStorage (survives page refresh)

## 🔑 Demo Accounts

| Role   | Email              | Password   |
|--------|--------------------|------------|
| Admin  | alice@acme.com     | admin123   |
| Member | bob@acme.com       | member123  |
| Member | carol@acme.com     | member123  |

---

## 📁 Project Structure

```
taskflow/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── utils.js
    └── components/
        ├── UI.jsx           # Shared UI components
        ├── AuthScreen.jsx   # Login / Sign up
        ├── Sidebar.jsx      # Navigation sidebar
        ├── Dashboard.jsx    # Overview & stats
        ├── ProjectsView.jsx # Project list & management
        ├── TasksView.jsx    # Kanban board
        └── TeamView.jsx     # Team member management
```

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

---

## 🌐 Deploy to Netlify (Free – Recommended)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**
6. Your live URL will be: `https://your-site-name.netlify.app`

---

## 🚄 Deploy to Railway

1. Push this repo to GitHub
2. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub**
3. Select your repository
4. Add these settings in **Variables**:
   - No env variables needed for frontend
5. Railway will auto-detect Vite and deploy
6. Your live URL will be shown in the dashboard

---

## ▲ Deploy to Vercel (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, get live URL instantly
```

---

## 🏗️ Tech Stack

| Layer     | Technology         |
|-----------|--------------------|
| Frontend  | React 18           |
| Bundler   | Vite 5             |
| Styling   | CSS-in-JS (inline) |
| Storage   | localStorage       |
| Fonts     | DM Sans (Google)   |

---

## 📋 Assignment Requirements Met

- ✅ Authentication (Signup/Login)
- ✅ Project & team management
- ✅ Task creation, assignment & status tracking
- ✅ Dashboard (tasks, status, overdue)
- ✅ Role-based access control (Admin/Member)
- ✅ Proper validations & relationships
- ✅ Ready for deployment (Netlify/Railway/Vercel)
