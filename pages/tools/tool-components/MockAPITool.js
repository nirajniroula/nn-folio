// pages/index.js
import { PrismicRichText } from "@prismicio/react";
import { useState } from "react";

const MockAPITool = ({ title, description }) => {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [scenario, setScenario] = useState("none");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `/api/${endpoint}?method=${method}&scenario=${scenario}`;
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body: method !== "GET" ? JSON.stringify({ scenario }) : undefined,
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setResponse(data);
  };

  const generateRoute = () => {
    if (response) {
      const baseUrl = "https://www.nirajniroula.com.np/api"; // Replace with your actual base URL
      let route = `${baseUrl}/${endpoint}`;

      if (method === "GET") {
        route += `?scenario=${scenario}`;
      }

      return route;
    } else {
      return "Create a test end-point first!";
    }
  };

  return (
    <div>
      {/* Main Content */}
      <div className="container">
        <h1 style={{ paddingTop: 16, paddingBottom: 16 }}>{title}</h1>
        <PrismicRichText field={description} />

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Endpoint:</label>
              <input
                type="text"
                value={endpoint}
                onChange={(e) => setEndpoint(e.target.value)}
                placeholder="Enter endpoint (e.g., users)"
                required
              />
            </div>
            <div className="form-group">
              <label>Method:</label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div>
            <div className="form-group">
              <label>Scenario:</label>
              <select
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
              >
                <option value="none">None</option>
                <option value="auth">Authentication</option>
                <option value="list">Fetch List</option>
                <option value="details">Fetch Details</option>
              </select>
            </div>
            <button type="submit" className="button">
              Test Endpoint
            </button>
          </form>
        </div>

        {response && (
          <div className="response-container">
            <h2>Response:</h2>
            <pre className="preformatted">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}

        <div className="response-container">
          <h2>Use this end-point in your project:</h2>
          <pre className="preformatted">{generateRoute()}</pre>
          {method !== "GET" && (
            <div style={{ marginTop: "10px" }}>
              <p>Request Body (JSON):</p>
              <pre className="preformatted">
                {JSON.stringify({ scenario }, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MockAPITool;
