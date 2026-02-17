// src/env.js
export const VITE_API_TOKEN = 
  import.meta.env?.VITE_API_TOKEN || 
  (typeof globalThis !== 'undefined' && globalThis.process?.env?.VITE_API_TOKEN) || 
  '';