# 📚 Pixel and Paper

**Pixel and Paper** is a personalized student dashboard platform that bridges the gap between traditional and modern education. By combining AI-driven insights with curated learning resources, it empowers students based on their learning styles and academic needs.

---

## 🚀 Features

- 🎯 **Customized Dashboard** — Tailored experience based on student personality and learning type.
- 📄 **Smart Questionnaire** — Determines if the student is practical, theoretical, visual, auditory, or self-driven.
- 📊 **Profile Integration** — Displays student details like name, class, roll number with photo.
- 📅 **Attendance Calendar** — Interactive calendar to mark presence/absence and add comments.
- 📋 **Career Guidance Form** — Helps students decide their stream after class 10.
- 🧠 **AI-Powered Suggestions** — Recommends YouTube, Coursera, Khan Academy, and other resources based on learning type.
- 🧾 **Feedback Form** — Gathers thoughts and improvements from students.
- 🔐 **Login-Based Personalization** — Saves responses to avoid repetition.

---

## 🛠 Tech Stack

| Frontend     | Backend      | AI Integration  | Tools & Services      |
|--------------|--------------|-----------------|------------------------|
| HTML, CSS    | Python (Flask) | JavaScript (Form logic) | Google Forms (optional) |
| Vanilla JS   | JSON API      | LocalStorage     | GitHub Pages / Netlify |

---

## 📦 Folder Structure

```
PixelAndPaper/
├── index.html                # Main landing page
├── questionnaire.html        # MCQ form to detect learning type
├── dashboard.html            # Custom dashboard after result
├── profile.html              # Student profile section
├── calendar.html             # Attendance tracker
├── feedback.html             # Feedback form
├── css/
│   └── style.css             # All shared styles
├── js/
│   ├── main.js               # Questionnaire logic
│   └── resources.js          # JS fetch to Flask backend
├── backend/
│   └── resource.py           # Python Flask API for recommendations
└── assets/
    └── logo.png              # App logo
```

---

## 📡 Running Locally

### 🔹 Prerequisites

- Python 3.x
- Flask installed (`pip install flask`)

### 🔹 Start Backend

```bash
cd backend
python resource.py
```

### 🔹 Open Frontend

Open `index.html` in your browser or use a local server (like Live Server in VS Code).

---

## 🤖 How It Works

1. Student logs in → fills questionnaire.
2. JavaScript calculates learning type and stores it in `localStorage`.
3. JS sends type to Flask API → receives curated links.
4. Dashboard and recommendations update accordingly.

---

## ✨ Future Plans

- Student login/authentication
- Connect with real school database
- Admin panel for tracking
- PDF generation for attendance/report cards
- Language localization

---

## 🙌 Contributors

- [Brahmleen Kaur] - Developer & Designer  


---

## 📬 Contact

Have questions or suggestions?  
📧 Email: brahmleen@gmail.com
