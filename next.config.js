/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.gravatar.com'], // Agrega el dominio de tu URL de origen aquí
  },
};

module.exports = nextConfig;
