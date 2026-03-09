


"use client";

import React, { useState } from "react";

const ApiTest = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testApi = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/`); // Replace VPS-IP with your actual IP
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      const data = await res.text();
      setResponse(data);
    } catch (err: unknown) {
      // Type assertion to access message
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h2>API Connectivity Test</h2>
      <button
        onClick={testApi}
        style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
      >
        {loading ? "Testing..." : "Test API"}
      </button>
      <div style={{ marginTop: "1rem" }}>
        {response && (
          <div style={{ color: "green" }}>
            <strong>Response:</strong> {response}
          </div>
        )}
        {error && (
          <div style={{ color: "red" }}>
            <strong>Error:</strong> {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiTest;
