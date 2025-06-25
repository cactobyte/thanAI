# ThanAI 

## 🚀 Quick Start (Frontend Only)

### 1. **Prerequisites**
- **Node.js** (v18+ recommended)
  - Download and install from [nodejs.org](https://nodejs.org/en/download/)
- **npm** (comes with Node.js)
- (Optional) **Git** for version control ([download here](https://git-scm.com/download/win))

### 2. **Clone the Repository**
If you haven't already:
```sh
git clone https://github.com/cactobyte/thanAI.git
cd thanAI
```

### 3. **Install Frontend Dependencies**
```sh
cd frontend
npm install
```

### 4. **Run the Frontend (Development Mode)**
```sh
npm run dev
```
- Open your browser to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Troubleshooting
- **If you see errors about `package.json` not found:**
  - Make sure you are in the `frontend` folder before running `npm` commands.
- **If you see permission errors on Windows:**
  - Try running your terminal as Administrator.
- **If you see errors about missing dependencies:**
  - Run `npm install` again in the `frontend` folder.

---

## ⚡ Backend Setup (Optional)
- The backend (Node.js + Express + PostgreSQL) is in the `backend` folder.
- See future updates for backend setup instructions.

---

## 📦 Project Structure
```
ThanAI/
  frontend/   # Next.js + Tailwind CSS (UI)
  backend/    # Node.js/Express API (optional)
  README.md
```
