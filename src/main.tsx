import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

async function enableMocking() {
  if (import.meta.env.MODE === "development") {
    const { worker } = await import("./mocks/browser");
    await worker.start();
  }
}

enableMocking().then(() => {
  const root = createRoot(document.getElementById("root")!);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
