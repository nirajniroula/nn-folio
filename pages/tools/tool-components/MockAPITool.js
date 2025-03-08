// pages/index.js
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { SlEye, SlTrash } from "react-icons/sl";
import responseTemplates from "../../../constants/mockResponseTemplates";

const MockAPITool = ({ title, description }) => {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [scenario, setScenario] = useState("none");
  const [response, setResponse] = useState(null);
  const [savedEndpoints, setSavedEndpoints] = useState([]);

  // Get scenarios for the selected method
  const methodScenarios = responseTemplates[method] || {};
  const scenarioOptions = Object.keys(methodScenarios);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `/api/${endpoint}?method=${method}&scenario=${scenario}`;
    const options = {
      method,
      headers: { "Content-Type": "application/json" },
      body:
        method !== "GET" && method !== "DELETE"
          ? JSON.stringify({ scenario })
          : undefined,
    };

    try {
      const res = await fetch(url, options);
      const data = res.status === 204 ? null : await res.json(); // Handle 204
      setResponse(data);
    } catch (error) {
      setResponse({ error: "Failed to parse response" });
    }
  };

  const saveEndpoint = () => {
    if (response) {
      const newEndpoint = {
        endpoint,
        method,
        scenario,
        response,
        timestamp: new Date().toLocaleString(),
      };
      setSavedEndpoints([...savedEndpoints, newEndpoint]);
    } else {
      showToast("Cerate a test end-point first!");
    }
  };

  const deleteEndpoint = (index) => {
    const updatedEndpoints = savedEndpoints.filter((_, i) => i !== index);
    setSavedEndpoints(updatedEndpoints);
  };

  const generateRoute = () => {
    if (response) {
      const baseUrl = "https://www.nirajniroula.com.np/api"; // Replace with your actual base URL
      let route = `${baseUrl}/${endpoint}`;

      route += `?method=${method}&scenario=${scenario}`;

      return route;
    } else {
      return "Create a test end-point first!";
    }
  };

  const showToast = (message) => {
    if (!message) {
      return;
    }
    // 1. Get the alert element
    const alertElement = document.querySelector(".toast");
    const alertTextElement = document.querySelector(".toast-text");

    // 2. Show the alert
    alertElement.classList.remove("hidden");
    alertTextElement.textContent = message;

    // 3. Hide the alert (e.g., after a few seconds or on button click)
    setTimeout(() => {
      alertElement.classList.add("hidden");
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className="flex flex-1 flex-col p-6">
      {/* Main Content */}
      <h1 className="mb-4 text-2xl font-bold">{title}</h1>

      {/* Three-Column Layout */}
      <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-5">
        {/* Left Column: Form (20%) */}
        <div className="col-span-1">
          <div className="card bg-base-100 p-6">
            <form onSubmit={handleSubmit}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Route:</span>
                </label>
                <input
                  type="text"
                  value={endpoint}
                  onChange={(e) => setEndpoint(e.target.value)}
                  placeholder="Enter endpoint (e.g., users)"
                  className="input-bordered input w-full"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Method:</span>
                </label>
                <select
                  value={method}
                  onChange={(e) => {
                    setMethod(e.target.value);
                    setScenario("none"); // Reset scenario when method changes
                  }}
                  className="select-bordered select w-full"
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="DELETE">DELETE</option>
                </select>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Scenario:</span>
                </label>
                <select
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value)}
                  className="select-bordered select w-full"
                >
                  <option value="none">None</option>
                  {scenarioOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <button type="submit" className="btn-primary btn flex-1">
                  Create Test Endpoint
                </button>
                <button
                  type="button"
                  onClick={saveEndpoint}
                  className="btn-secondary btn flex-1"
                >
                  Pin Endpoint
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Center Column: Response and Result Endpoint (60%) */}
        <div className="col-span-3">
          {response && (
            <div className="card mb-6 bg-base-100 p-6">
              <div className="flex items-center justify-between">
                <h2 className="mb-4 text-xl font-bold">Response:</h2>
                <button
                  onClick={() => {
                    if (response) {
                      navigator.clipboard.writeText(
                        JSON.stringify(response, null, 2)
                      );
                      showToast("Copied to clipboard.");
                    }
                  }}
                  className="btn-sm btn-square btn"
                >
                  <MdContentCopy className="h-4 w-4" />
                </button>
              </div>
              <pre className="max-h-96 overflow-x-auto overflow-y-auto rounded-md bg-base-200 p-4">
                {JSON.stringify(response, null, 2)}
              </pre>
            </div>
          )}

          <div className="card bg-base-100 p-6">
            <div className="flex items-center justify-between">
              <h2 className="mb-4 text-xl font-bold">
                Use this end-point in your project:
              </h2>
              <button
                onClick={() => {
                  if (response) {
                    navigator.clipboard.writeText(
                      JSON.stringify(generateRoute()).slice(1, -1)
                  );
                    showToast("Copied to clipboard.");
                  }
                }}
                className="btn-sm btn-square btn"
              >
                <MdContentCopy className="h-4 w-4" />
              </button>
            </div>
            <pre className="overflow-x-auto rounded-md bg-base-200 p-4">
              {generateRoute()}
            </pre>
            {method !== "GET" && (
              <div className="mt-4">
                <p className="font-bold">Request Body (JSON):</p>
                <pre className="overflow-x-auto rounded-md bg-base-200 p-4">
                  {JSON.stringify({ scenario }, null, 2)}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Saved Endpoints (20%) */}
        <div className="col-span-1">
          <div className="card bg-base-100 p-6">
            <h2 className="mb-4 text-xl font-bold">Pinned Endpoints</h2>
            {savedEndpoints.length === 0 ? (
              <p>No endpoints saved yet.</p>
            ) : (
              <ul className="space-y-4">
                {savedEndpoints.map((endpoint, index) => (
                  <li
                    key={index}
                    className="card rounded-md bg-base-200 p-4"
                    style={
                      endpoint.response === response
                        ? { borderWidth: 1, borderColor: "gray" }
                        : {}
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="break-words font-bold"
                        style={{ overflowWrap: "anywhere" }}
                      >
                        {endpoint.endpoint}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setResponse(endpoint.response)}
                          className="btn-info btn-sm btn-circle btn"
                        >
                          <SlEye className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => deleteEndpoint(index)}
                          className="btn-error btn-sm btn-circle btn"
                        >
                          <SlTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {endpoint.method} - {endpoint.timestamp}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="toast-start toast z-10 hidden">
        <div className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <span className="toast-text"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockAPITool;
