const newCard = (album, artist) => {
  return `
    <div class="col-md-2">
        <div class="card">
            <img class="card-img-top" src="${album.img.url}" alt=${album.name} />
            <div class="card-body">
                <a href="${album.href}""><h5 class="card-title">${album.name}</h5> </a>
                <a href="${artist.href}"><h6 class="card-subtitle">${artist.name}</h6>
                </a>
            </div>
        </div>
    </div>`
}

const fetchNewReleases = () => {
  SpotifyAPI.browseNewReleases().then(data => {
    const albums = data.albums.items
      .map(item => {
        const img = item.images.filter(image => {
          return image.width === 300 && image.height === 300
        })[0]

        const album = {
          name: item.name,
          href: item.external_urls.spotify,
          img: img,
        }
        const artist = {
          name: item.artists[0].name,
          href: item.artists[0].external_urls.spotify,
        }

        console.log(artist)
        return newCard(album, artist)
      })
      .join(' ')
    const targetDiv = document.querySelector('.row.app')
    targetDiv.innerHTML += albums
  })
}

window.onload = () => {
  fetchNewReleases()
}
