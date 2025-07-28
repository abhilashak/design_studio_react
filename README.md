# Bug Tracker Rails React

A modern bug tracking application built with Rails 8 and React, providing a comprehensive solution for managing software bugs through their lifecycle from creation to production deployment.

## 🛠️ Tech Stack

- **Backend:** Ruby on Rails 8.0
- **Frontend:** React with modern JavaScript (ES6+)
- **Database:** PostgreSQL
- **Bundling:** esbuild via jsbundling-rails
- **Styling:** CSS with Rails asset pipeline
- **Runtime:** Ruby 3.4.1, Node.js 24.1.0

## 🚀 Features

- **User Authentication:** Secure sign-in system for team members
- **Bug Management:** Create and track bugs throughout their lifecycle
- **Status Workflow:** Complete bug status management:
  - **New:** Initial bug creation
  - **Assigned:** Bug assigned to developer
  - **In Progress:** Developer actively working on the bug
  - **Done:** Bug fix completed
  - **QA:** Bug fix under quality assurance testing
  - **Production:** Bug fix deployed to production
- **Modern React-based user interface**
- **Fast JavaScript bundling with esbuild**
- **PostgreSQL database for robust data management**
- **Responsive design for development workflows**

## 📋 Prerequisites

- Ruby 3.4.1
- Node.js 24.1.0
- PostgreSQL
- Yarn package manager

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bug_tracker_rails_react
   ```

2. **Install dependencies**
   ```bash
   bundle install
   yarn install
   ```

3. **Setup database**
   ```bash
   rails db:create
   rails db:migrate
   ```

4. **Start development server**
   ```bash
   ./bin/dev
   ```

   This starts both the Rails server and JavaScript build process with hot reloading.

5. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Architecture

- **Rails Backend:** API endpoints and server-side logic for bug management
- **React Frontend:** Component-based UI in `app/javascript/components/`
- **esbuild:** Fast JavaScript bundling and hot reloading
- **PostgreSQL:** Production-ready database for bug tracking data

## 📁 Project Structure

```
app/
├── javascript/
│   ├── application.js     # Main entry point
│   └── components/        # React components
├── controllers/           # Rails controllers
├── models/               # Rails models (User, Bug)
├── views/                # Rails views and layouts
└── assets/               # Stylesheets and images

config/                   # Rails configuration
public/                   # Static assets
```

## 🔧 Development

- **JavaScript builds:** `yarn build --watch` (auto-runs with `./bin/dev`)
- **Rails console:** `rails console`
- **Database console:** `rails dbconsole`
- **Tests:** `rails test`

## 🚦 Production Deployment

The app is containerized with Docker and ready for deployment with Kamal.

```bash
# Build for production
rails assets:precompile

# Deploy with Kamal
kamal deploy
```

## 📝 Bug Workflow

1. **Create Bug:** Users can create new bugs with descriptions and priority levels
2. **Assign Bug:** Bugs can be assigned to team members
3. **Update Status:** Track progress through the defined status workflow
4. **Monitor Progress:** Real-time updates on bug status changes
5. **Complete Cycle:** Bugs move from creation to production deployment

## 🔐 Authentication

- Secure user authentication system
- Role-based access control
- Session management for team collaboration

