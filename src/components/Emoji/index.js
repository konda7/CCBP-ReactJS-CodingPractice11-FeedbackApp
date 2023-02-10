import './index.css'

const Emoji = props => {
  const {emojis, feedbackProvided} = props
  const {name, imageUrl} = emojis

  const onClickEmoji = () => {
    feedbackProvided()
  }

  return (
    <li className="emoji-container">
      <button type="button" className="emoji-btn" onClick={onClickEmoji}>
        <img src={imageUrl} alt={name} className="emoji-image" />
      </button>
      <p className="emoji-name">{name}</p>
    </li>
  )
}

export default Emoji
