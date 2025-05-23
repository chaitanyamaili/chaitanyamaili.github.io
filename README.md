# 🌐 Developer Portfolio – Staff Engineer (Cloud Native, GCP)

This is a modern, responsive developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**. It supports **dark/light mode**, **PDF export**, and modular components for easy customization. It is tailored to present the profile of a **Staff Engineer** with 14+ years of experience in Cloud Native technologies and Google Cloud Platform.

## ✨ Features

- Responsive design for desktop and mobile
- Dark and light mode support (toggleable)
- Animated sections with Framer Motion
- Modular components (`Hero`, `Projects`, `Skills`, etc.)
- PDF export functionality for downloading your CV
- Easy customization via a single `cvData` object

## 🛠️ Tech Stack

- ⚛️ React (with TypeScript)
- 💨 Tailwind CSS
- 🎞️ Framer Motion
- 🌗 Theme toggle using Tailwind's dark mode
- 📄 jsPDF and html2canvas for exporting to PDF

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chaitanyamaili/chaitanyamaili.github.io.git portfolio
cd portfolio

# Install dependencies
npm install
# or
yarn install

Run the Development Server

npm run dev
# or
yarn dev

The site should be running at http://localhost:5173 (Vite default).

Creating UI component

`npx shadcn@latest add button card input textarea`

🧑‍💻 Customization

All portfolio data is stored in the App.tsx file inside the cvData object:

const cvData = {
  name: "Aarav Deshmukh",
  title: "Staff Engineer | Cloud Native Architect | GCP Certified",
  ...
}

You can update:
	•	Contact info
	•	Skills
	•	Work Experience
	•	Education
	•	Projects
	•	Profile Picture

🌓 Theme Toggle

Dark/light mode toggle is located in the top-right section of the Hero component. Tailwind’s dark: variants are used to style components.

🔧 Folder Structure

src/
├── components/       # All UI components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   └── ...
├── App.tsx           # Main component with CV data
├── ThemeToggle.tsx   # Dark/light toggle logic
└── main.tsx
public/
├── index.html
└── favicon.ico

📦 Build for Production

npm run build
# or
yarn build

Then deploy using platforms like GitHub Pages, Vercel, or Netlify.

📄 License

This project is licensed under the MIT License.

⸻

🧠 Inspired by
	•	Dev.to Portfolio Guides
	•	Tailwind UI + shadcn/ui
	•	Resume formats of top tech engineers

⸻

💡 Feel free to fork and make it your own. Contributions are welcome!
