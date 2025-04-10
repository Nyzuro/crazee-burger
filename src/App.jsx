import { useState } from "react";
import Form from "./components/Form";

export default function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Bienvenue chez nous!</h1>
      <h2>Connectez-vous</h2>
      <Form setName={setName} name={name} />
    </div>
  );
}
