// Write your React code here.

import {Component} from 'react'

import './index.css'

import Emoji from '../Emoji'

class Feedback extends Component {
  state = {feedback: false}

  feedbackProvided = () => this.setState({feedback: true})

  render() {
    const {feedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        {feedback ? (
          <div className="feedback-form-container">
            <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
            <h1 className="thank-you-heading">Thank You!</h1>
            <p className="appreciation-description">
              We'll use your feedback to improve our customer support
              performance
            </p>
          </div>
        ) : (
          <div className="feedback-form-container">
            <h1 className="feedback-heading">
              How satisfied are you with our customer support performance?
            </h1>

            <ul className="emojis-list-container">
              {emojis.map(eachEmoji => (
                <Emoji
                  emojis={eachEmoji}
                  feedbackProvided={this.feedbackProvided}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
