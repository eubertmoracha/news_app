A modern React + Vite web application that displays live news articles categorized into Politics, Economy, Social, and Sports, using data fetched from The News API through a secure Express backend.
It features a clean, responsive design powered by Tailwind CSS and includes smooth navigation via React Router.

🚀 Features

✅ Dynamic News Fetching — retrieves live news using an Express proxy server.
✅ React Router Navigation — easily switch between Home, Politics, Economy, Social, and Sports pages.
✅ Navbar — styled navigation bar with color highlighting for active links.
✅ Back Button — present on every category page for quick navigation.
✅ Responsive Design — built with Tailwind CSS for mobile and desktop.
✅ Fallback Images — handles missing images gracefully with placeholders.
✅ Environment Variables — API key secured via .env file.

📁 Project Structure
project_final/
│
├── news-reader/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── BackButton.jsx
│   │   │   ├── NewsCard.jsx
│   │   │   ├── NewsList.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Politics.jsx
│   │   │   ├── Economy.jsx
│   │   │   ├── Social.jsx
│   │   │   ├── Sports.jsx
│   │   │
│   │   ├── services/
│   │   │   └── newsService.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── App.css
│   │
│   ├── server.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── postcss.config.cjs
│   ├── .gitignore
│   └── .env

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/news-reader-project.git
cd news-reader-project

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env File

Inside the project root, create a .env file and add your News API key:

VITE_THENEWS_API_KEY=your_api_key_here

4️⃣ Run Both Frontend and Backend
npm start


Frontend runs on: http://localhost:5173

Backend runs on: http://localhost:5000

🧠 Tech Stack
Layer	Technology
Frontend	React (Vite)
Styling	Tailwind CSS
Routing	React Router DOM
Backend	Express.js
API	The News API
HTTP Requests	Axios
Utilities	Concurrently, CORS
🧾 Key Components

Navbar.jsx → navigation bar linking to all category pages

BackButton.jsx → used on inner pages for returning to previous routes

NewsCard.jsx → reusable card for displaying each article

NewsList.jsx → renders the list of articles in grid layout

newsService.js → handles fetching from Express API endpoint

server.js → backend proxy connecting to TheNewsAPI

🏠 Pages Overview
Page	Description
Home	Highlights what’s inside Politics, Economy, Social & Sports
Politics	Displays current political headlines
Economy	Shows financial and business-related news
Social	Focuses on lifestyle, culture, and human interest stories
Sports	Lists the latest sports updates
🧭 Future Improvements

Add pagination and search features

Include category filters and sorting

Deploy backend on Render / Railway

Deploy frontend on Netlify or Vercel
