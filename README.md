📊 Operations Analytics Dashboard

An AI-powered analytics dashboard that converts natural language questions (English / Hindi / Hinglish) into SQL queries, executes them on a service request database, and visualizes insights on the frontend.

This project is designed for college service operations analytics such as IT support, facilities, HR, academics, and finance.

🚀 Key Features

🧠 AI SQL Generator (Groq + LLaMA 3.1)

Converts natural language → SQL SELECT queries

Works with English, Hindi & Hinglish

🔒 Safe Query Generation

Only SELECT queries

No destructive SQL commands

📂 CSV / Database Ready

Supports structured service request data

🌐 Modern Frontend (React + Vite)

Clean dashboard UI

Ready for charts & analytics

🔗 REST API Architecture

Frontend ↔ Backend separation

📈 Visualization Ready

Can be extended to Recharts / Power BI

🏗️ Tech Stack
Frontend

React (Vite)

JavaScript (ES6+)

Recharts / Chart Libraries (optional)

CSS

Backend

Node.js

Express.js

Groq API (LLaMA 3.1)

dotenv

node-fetch

AI / LLM

Groq Chat Completion API

Model: llama-3.1-8b-instant

📁 Project Structure
fronted_backedn_connection_correct/
│
├── Backend/
│   ├── services/
│   │   └── sqlAgent.js        # AI SQL Generator Agent
│   ├── routes/
│   │   └── sqlRoutes.js       # API routes
│   ├── index.js               # Express server entry
│   ├── .env                   # Environment variables
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── Pages/
│   │   │   └── Home.jsx       # Dashboard UI
│   │   ├── api/
│   │   │   └── sqlApi.js      # API calls
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
└── README.md

🧠 Database Schema (Used by AI)

Table: SERVICE_REQUESTS

Column	Type
RequestID	VARCHAR(20)
SubmittedDate	DATETIME
Category	ENUM
SubCategory	VARCHAR
Priority	ENUM
Status	ENUM
AssignedTeam	VARCHAR
AssignedTo	VARCHAR
ResolutionDate	DATETIME
SLA_Hours	INT
ActualResolutionHours	DECIMAL
SLA_Status	ENUM
RequesterDepartment	ENUM
Description	TEXT
ReopenCount	INT
FirstResponseHours	DECIMAL
CreatedAt	TIMESTAMP

