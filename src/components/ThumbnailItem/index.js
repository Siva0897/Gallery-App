// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, updateActiveImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const onThumbnailClick = () => updateActiveImage(id)
  return (
    <li className="list-item">
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        onClick={onThumbnailClick}
      />
    </li>
  )
}

export default ThumbnailItem
