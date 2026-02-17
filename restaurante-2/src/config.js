// src/config.js
export const API_TOKEN = 
  (typeof import.meta !== 'undefined' && import.meta.env) 
    ? import.meta.env.VITE_API_TOKEN 
    : '';