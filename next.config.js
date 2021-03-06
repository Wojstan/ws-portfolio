/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    ROOT:
      process.env.NODE_ENV === "production"
        ? "http://localhost:3000/api"
        : `http://localhost:3000/api`,
  },
};
