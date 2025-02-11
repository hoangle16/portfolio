"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/animations/ScrollAnimation";

export default function RevalidatePage() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRevalidate = async () => {
    const token = prompt("Enter revalidation token:");
    if (!token) return;

    setIsLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/revalidate", {
        method: "POST",
        headers: {
          "x-secret-token": token,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(
          `Successfully revalidated at ${new Date().toLocaleTimeString()}`
        );
        setTimeout(() => {
          window.location.href = "/";
        }, 5000);
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("Error: Failed to revalidate");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <title>Revalidate Data | Portfolio</title>
      <section className="min-h-[calc(100vh-72px)] w-full flex justify-center items-center gap-4 py-16 px-4">
        <ScrollAnimation
          direction="right"
          className="w-full flex flex-col items-center justify-center space-y-4"
        >
          <h1 className="text-5xl">Revalidate Cache</h1>
          <h2 className="text-2xl text-blue-500 dark:text-blue-400">
            Clear and rebuild static pages
          </h2>

          <button
            onClick={handleRevalidate}
            disabled={isLoading}
            className="rounded px-5 py-2.5 overflow-hidden group bg-blue-500 dark:bg-blue-600 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 dark:hover:from-blue-600 dark:hover:to-blue-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 dark:hover:ring-blue-500 transition-all ease-out duration-300 dark:ring-offset-gray-900"
          >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <div className="flex justify-center gap-2">
              {isLoading ? (
                <>
                  <span className="relative">Revalidating...</span>
                </>
              ) : (
                <span className="relative">Revalidate Now</span>
              )}
            </div>
          </button>

          {status && (
            <div
              className={`p-4 rounded-md ${
                status.startsWith("Error")
                  ? "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"
                  : "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
              }`}
            >
              {status}
            </div>
          )}
        </ScrollAnimation>
      </section>
    </>
  );
}
