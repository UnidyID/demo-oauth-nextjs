const raise = () => {
  throw new Error("Environment variable not set.");
};

export const SCOPE = "openid profile email phone";
export const UNIDY_URL = process.env.UNIDY_URL || raise();
export const CLIENT_ID = process.env.CLIENT_ID || raise();
export const CLIENT_SECRET = process.env.CLIENT_SECRET || raise();

export const HOST = "https://8b19-78-0-3-98.ngrok-free.app";

// app dir
export const CALLBACK_URL = `${HOST}/callback`;
// pages dir
export const PAGES_CALLBACK_URL = `${HOST}/api/callback`;
