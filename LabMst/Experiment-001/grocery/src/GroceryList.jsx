import React, { useState } from "react";

export default function GroceryList() {
  const [groceryList, setGroceryList] = useState([
    { id: 1, name: "Potatos", quantity: 5 },
    { id: 2, name: "Ganja", quantity: 3 },
    { id: 3, name: "Carrots", quantity: 4 },
  ]);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleAddItem(e) {
    e.preventDefault();

    if (!name.trim() || quantity <= 0) return;

    const newId =
      groceryList.length > 0
        ? Math.max(...groceryList.map((item) => item.id)) + 1
        : 1;

    const newItem = {
      id: newId,
      name: name.trim(),
      quantity,
    };

    setGroceryList([...groceryList, newItem]);
    setName("");
    setQuantity(1);
  }

  return (
    <div style={{ maxWidth: 500, margin: "30px auto", fontFamily: "Arial, sans-serif", padding: 20, border: "1px solid #ddd", borderRadius: 8 }}>
      <h2 style={{ textAlign: "center" }}>Grocery List</h2>
      <ul style={{ listStyleType: "none", paddingLeft: 10 }}>
        {groceryList.map((item) => (
          <li key={item.id} style={{ borderBottom: "2px solid #eee", padding: "6px 0" }}>
            {item.name} - Quantity:  {item.quantity}
          </li>
        ))}
      </ul>

      <h3>Add Kuch Chahiye kya?</h3>
      <form onSubmit={handleAddItem}>
        <label htmlFor="name">Samagri</label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: 6, marginTop: 4, boxSizing: "border-box" }}
        />

        <label htmlFor="quantity" style={{ marginTop: 10, display: "block" }}>
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          min="1"
          required
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          style={{ width: "100%", padding: 6, marginTop: 4, boxSizing: "border-box" }}
        />

        <button
          type="submit"
          style={{
            marginTop: 15,
            padding: "10px 12px",
            width: "100%",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Aur Jode
        </button>
      </form>
    </div>
  );
}
