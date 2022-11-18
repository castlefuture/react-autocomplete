import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  useS;
  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("https://reqres.in/api/users");

      setUsers(response.data.tata);
    };
    loadUsers();
  }, []);
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = users.filter((usr) => {
        const regex = new RegExp(`${text}`, "gi");
        return user.email.match(regex);
      });
    }

    setText(text);
  };
  return (
    <div className="container">
      <div>{text}</div>
      <input
        type="text"
        className="col-md-12 input"
        style={{ marginTop: 10 }}
        onChange={(event) => onChangeHandler(event.target.value)}
        value={text}
      />
    </div>
  );
}

export default App;
