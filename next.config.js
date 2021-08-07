module.exports = {
  async redirects() {
    return [
      {
        source: '/repertoar',
        destination: '/repertoar/aktualni',
        permanent: true,
      },
    ]
  }
}
