// jest.setup.js
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Definimos la variable aquí, que es terreno seguro para Node
process.env.VITE_API_TOKEN = 'test-token-seguro';

// El mock de fetch que ya tenías
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: false }),
  })
);