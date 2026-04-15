import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://cicd-java-demo:8081/api/hello")
      .then(res => res.text())
      .then(data => setMessage(data));
  }, []);

  return (
    <div>
      <h1>React + Spring Boot CI/CD</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;