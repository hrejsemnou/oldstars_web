module.exports = {
  async redirects() {
    return [
      {
        source: "/repertoar",
        destination: "/repertoar/aktualni",
        permanent: true,
      },
      {
        source: "/oldstars",
        destination: "/oldstars/o-nas",
        permanent: true,
      },
      {
        source: "/herecke-studio",
        destination: "/herecke-studio/soubory",
        permanent: true,
      },
      {
        source: "/projekty",
        destination: "/projekty/on-the-road",
        permanent: true,
      },
    ];
  },
  outputFileTracingExcludes: {
    "/*": ["public/**/*"],
  },
};
