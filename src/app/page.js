"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCode,
  FaTerminal,
  FaDatabase,
  FaServer,
  FaCloud,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [terminalIndex, setTerminalIndex] = useState(0);

  const skeletonBlog = [1, 2, 3, 4];

  // Terminal typing effect
  const terminalCommands = [
    "npm install hunting-coder",
    "git clone https://github.com/hunting-coder",
    "cd hunting-coder && npm start",
    "// Welcome to Hunting Coder",
  ];

  useEffect(() => {
    console.log("useEffect is running...");

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/blogList`, { method: "get" });
        const data = await res.json();
        setLoading(false);
        setBlogs(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (terminalIndex < terminalCommands.length) {
      const timer = setTimeout(() => {
        setTerminalText(terminalCommands[terminalIndex]);
        setTerminalIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setTerminalIndex(0);
    }
  }, [terminalIndex]);

  // Generate random contribution data
  const generateContributionData = () => {
    const data = [];
    for (let i = 0; i < 52; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push(Math.floor(Math.random() * 5));
      }
      data.push(week);
    }
    return data;
  };

  const contributionData = generateContributionData();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header Section */}
      <nav className="border-b dark:border-gray-700 bg-white dark:bg-gray-800 fixed w-full top-0 z-50" />

      {/* Enhanced Hero Section */}
      <div className="relative pt-24 pb-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30 dark:opacity-30">
          <div className="absolute top-10 left-10 text-4xl text-gray-800 dark:text-gray-200 font-mono">
            {"</>"}
          </div>
          <div className="absolute bottom-24 right-10 text-4xl text-gray-800 dark:text-gray-200 font-mono">
            {"{...}"}
          </div>
          <div className="absolute top-3/4 left-20 text-2xl text-gray-800 dark:text-gray-200 font-mono">
            {"function()"}
          </div>
          <div className="absolute top-1/3 right-20 text-2xl text-gray-800 dark:text-gray-200 font-mono">
            {"const dev ="}
          </div>
          <div className="absolute top-1/4 left-1/4 text-2xl text-gray-800 dark:text-gray-200 font-mono">
            {"async/await"}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Image
                  className="rounded-full shadow-lg relative border-2 border-purple-500 dark:border-blue-400"
                  src="/coderblog.png"
                  alt="Coding Blog Logo"
                  width={180}
                  height={180}
                  priority
                />
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
                {"<Hunting"}{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  Coder
                </span>{" "}
                {"/>"}
              </h1>

              <div className="flex justify-center gap-4 flex-wrap">
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #JavaScript
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #React
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #NextJS
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #WebDev
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #Algorithms
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300">
                  #DataStructures
                </span>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the latest in coding and development. From algorithms
                to frameworks, your daily dose of programming insights.
              </p>

              <div className="flex justify-center gap-4 mt-8">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg text-sm transition-colors duration-200 flex items-center gap-2">
                  <span>Start Reading</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Code Pattern Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>

      {/* Terminal Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center px-4 py-2 bg-gray-800">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-gray-400 text-sm font-mono">
              hunting-coder@terminal
            </div>
          </div>
          <div className="p-4 font-mono text-sm text-gray-300">
            <div className="flex">
              <span className="text-green-500 mr-2">$</span>
              <span className="typing-animation">{terminalText}</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Tech Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiJavascript className="text-5xl text-yellow-400 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              JavaScript
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiReact className="text-5xl text-blue-400 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              React
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiNextdotjs className="text-5xl text-gray-800 dark:text-white mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              Next.js
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiTailwindcss className="text-5xl text-cyan-400 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              Tailwind CSS
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiMongodb className="text-5xl text-green-500 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              MongoDB
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <SiNodedotjs className="text-5xl text-green-600 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              Node.js
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <FaServer className="text-5xl text-purple-500 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              Express
            </span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <FaCloud className="text-5xl text-blue-500 mb-4" />
            <span className="font-mono text-gray-700 dark:text-gray-300">
              Cloud
            </span>
          </div>
        </div>
      </div>

      {/* Code Snippet Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Code Snippets
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-gray-800">
              <div className="text-gray-400 text-sm font-mono">React Hooks</div>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300">
              <pre className="overflow-x-auto">
                <code>{`import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}</code>
              </pre>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center px-4 py-2 bg-gray-800">
              <div className="text-gray-400 text-sm font-mono">Algorithm</div>
            </div>
            <div className="p-4 font-mono text-sm text-gray-300">
              <pre className="overflow-x-auto">
                <code>{`// Binary Search Algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1; // Target not found
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub-style Contribution Graph */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Coding Activity
        </h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <div className="flex flex-wrap justify-center">
            {contributionData.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col mr-2">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 m-0.5 rounded-sm ${
                      day === 0
                        ? "bg-gray-100 dark:bg-gray-700"
                        : day === 1
                        ? "bg-green-200 dark:bg-green-900"
                        : day === 2
                        ? "bg-green-400 dark:bg-green-700"
                        : day === 3
                        ? "bg-green-600 dark:bg-green-500"
                        : "bg-green-800 dark:bg-green-300"
                    }`}
                    title={`${day} contributions`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <span className="font-mono">
              git commit -m "Daily coding progress"
            </span>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Latest Blogs
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? skeletonBlog?.map((item, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" count={4} />
                  </div>
                </div>
              ))
            : blogs?.map((blog, index) => (
                <Link
                  key={index}
                  href={`/blogpost/${blog.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {blog.title}
                    </h3>
                    <div className="border-t border-gray-200 dark:border-gray-700 my-3" />
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {blog.content.substr(0, 125)}...
                    </p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-medium rounded-lg text-sm transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </main>
  );
}
