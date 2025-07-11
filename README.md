# Design Studio React

A modern design studio web application built with Rails 8 and React, featuring a clean architecture for creative project management and design workflows.

## 🛠️ Tech Stack

- **Backend:** Ruby on Rails 8.0
- **Frontend:** React with modern JavaScript (ES6+)
- **Database:** PostgreSQL
- **Bundling:** esbuild via jsbundling-rails
- **Styling:** CSS with Rails asset pipeline
- **Runtime:** Ruby 3.4.1, Node.js 24.1.0

## 🚀 Features

- Modern React-based user interface
- Fast JavaScript bundling with esbuild
- PostgreSQL database for robust data management
- Responsive design for creative workflows
- Clean separation between Rails API and React frontend

## 📋 Prerequisites

- Ruby 3.4.1
- Node.js 24.1.0
- PostgreSQL
- Yarn package manager

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd design_studio_react
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

- **Rails Backend:** API endpoints and server-side logic
- **React Frontend:** Component-based UI in `app/javascript/components/`
- **esbuild:** Fast JavaScript bundling and hot reloading
- **PostgreSQL:** Production-ready database

## 📁 Project Structure

```
app/
├── javascript/
│   ├── application.js     # Main entry point
│   └── components/        # React components
├── controllers/           # Rails controllers
├── models/               # Rails models
└── views/                # Rails views and layouts

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

