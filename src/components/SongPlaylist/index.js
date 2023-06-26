import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongPlaylist = props => {
  const {songsDetails, deleteSong} = props
  const {imageUrl, name, genre, duration, id} = songsDetails

  const onDelete = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <img src={imageUrl} alt="track" className="image" />
      <div className="name-gener">
        <p>{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <p>{duration}</p>
      <div data-testid="delete">
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={onDelete}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongPlaylist
