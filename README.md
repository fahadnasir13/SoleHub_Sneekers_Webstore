 SoleHub – Sneaker eCommerce Platform 👟

**SoleHub** is a full-featured sneaker webstore built for speed, style, and scalability. Designed with a modern tech stack, it delivers a seamless shopping experience with product filtering, shopping cart, and admin-side management.

---

### 🚀 Features

- 🛍️ Responsive sneaker store UI
- 🧾 Cart functionality with quantity management
- 👤 User login/signup (JWT or session-based)
- 🧑‍💼 Admin panel for product & inventory control
- 💳 Stripe integration for payments
- 📦 Order confirmation and checkout
- 🌐 Fully responsive & mobile-first design

---

### 🛠️ Tech Stack

| Frontend        | Backend        | Database      | Dev Tools     |
|----------------|----------------|----------------|----------------|
| Next.js 14/15   | Node.js + Express | MongoDB + Mongoose | Tailwind CSS |
| React.js        | JWT Auth        | Stripe API     | Vercel / Railway |
| ShadCN UI       | RESTful APIs    | Cloudinary (optional) | Git & GitHub |

---

### 📂 Project Structure

root/
├── components/
├── pages/

│ ├── index.js # Home
│ ├── product/[id].js # Product page

├── backend/
│ ├── models/
│ ├── routes/
│ └── controllers/
├── public/

├── .env (for local variables)
└── .gitignore

yaml

---

### 🔧 Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/fahadnasir13/SoleHub_Sneekers_Webstore.git
   cd SoleHub_Sneekers_Webstore
Install frontend & backend dependencies

bash

npm install         # For frontend
cd backend && npm install
Set up your environment variables

Create a .env file in both root and backend folder:

ini

MONGO_URI=your_mongodb_url
STRIPE_SECRET_KEY=your_stripe_key
NEXT_PUBLIC_API_URL=http://localhost:5000
Run locally

Frontend: npm run dev

Backend: npm start or nodemon server.js

🌍 Deployment
Frontend: Vercel

Backend: Railway or Render

📸 Screenshots
<img width="1895" height="876" alt="image" src="https://github.com/user-attachments/assets/b7b1ee78-7dc0-447e-b2c2-bf444d596df9" />

<img width="1894" height="874" alt="image" src="https://github.com/user-attachments/assets/97eee14f-0b55-4c5d-a12b-73e16cf7ffef" />
<img width="1889" height="889" alt="image" src="https://github.com/user-attachments/assets/a373e552-b90e-47d9-89e5-31ef4a0c8d3c" />
<img width="1884" height="884" alt="image" src="https://github.com/user-attachments/assets/4651f964-1196-4d71-8bbe-a5add09f5424" />
<img width="1887" height="890" alt="image" src="https://github.com/user-attachments/assets/76b06628-a23f-4541-b38f-03a52056b4e9" />
<img width="1898" height="820" alt="image" src="https://github.com/user-attachments/assets/0ec646a6-fea4-469b-b728-739979c99d2f" />


🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

📄 License
This project is open-source under the MIT License.

🔗 Connect
👨‍💻 Author: Fahad Nasir

📫 Contact: fahadnasir1311@gmail.com

💡 SoleHub is built to be a starting point for anyone who wants to launch a stunning eCommerce store focused on sneakers or fashion!
