const MillionLint = require('@million/lint');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      port: '',
      pathname: '/cy6eria/image/upload/**'
    }]
  }
};
module.exports = MillionLint.next({
  rsc: true
})(nextConfig);