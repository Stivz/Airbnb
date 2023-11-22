/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
        pathname: '**', 
        },
        {
          protocol: 'https',
          hostname: "lh3.googleusercontent.com",
          pathname: '**',    
        },
        {
          protocol: 'https',
          hostname: "res.cloudinary.com",
          pathname: '**',    
        },
      ],
    },
    
}

module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}
module.exports = nextConfig
