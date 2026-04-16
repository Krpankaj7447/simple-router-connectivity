# 🚀 React Router Project (Nested + Dynamic Routing)

This project demonstrates the implementation of *React Router DOM* with advanced concepts like:

- Nested Routing
- Dynamic Routing
- Multiple Pages Navigation

---

## 🛠️ Tech Stack

- React.js
- React Router DOM
- Tailwind css

---

## 📚 Features

- ✅ Basic Routing (Home, About, Contact)
- ✅ Nested Routing (inside pages)
- ✅ Dynamic Routing using URL parameters
- ✅ Clean folder structure
- ✅ Fast navigation without page reload

---

## 📂 Folder Structure

src/
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── Product.jsx
│
│── App.jsx
│── main.jsx

---

## 🔥 Routing Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

  {/* Dynamic Routing */}
  <Route path="/product/:id" element={<Product />} />
</Routes>
