const API_TOKEN =
  'BQAtpibuYudGryj4PsRONJpB5GShWXa9XNcYrGHawcinXRPiiX0LHL0k0tlbJ849a_yNKmxHOlIACAZXUZ0'

const SpotifyAPI = {
  browseNewReleases: () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer BQAtpibuYudGryj4PsRONJpB5GShWXa9XNcYrGHawcinXRPiiX0LHL0k0tlbJ849a_yNKmxHOlIACAZXUZ0',
      },
    }

    return fetch(
      'https://api.spotify.com/v1/browse/new-releases',
      options
    ).then(response => response.json())
  },
}
