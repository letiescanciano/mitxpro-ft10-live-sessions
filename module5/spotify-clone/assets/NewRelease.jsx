const NewRelease = ({ artist, album }) => {
  return (
    <div class='col-md-2'>
      <div class='card'>
        <img class='card-img-top' src='${album.img.url}' alt={album.name} />
        <div class='card-body'>
          <a href={album.href}>
            <h5 class='card-title'>{album.name}</h5>
          </a>
          <a href={artist.href}>
            <h6 class='card-subtitle'>{artist.name}</h6>
          </a>
        </div>
      </div>
    </div>
  )
}
