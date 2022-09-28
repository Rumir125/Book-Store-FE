// export const BACKEND_BASE_URL = `http://localhost:${process.env.backendPort}`;
export const BACKEND_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_API
  ? process.env.NEXT_PUBLIC_BACKEND_API
  : `http://localhost:${process.env.backendPort}`;
