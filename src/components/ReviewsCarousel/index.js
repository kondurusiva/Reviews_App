// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onClickRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReview: prevState.activeReview + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  renderActivePreview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="preview-container">
        <img className="candidate-image" src={imgUrl} alt={username} />
        <p className="userName">{username}</p>
        <p className="company">{companyName}</p>
        <p className="company">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const previewFunction = reviewsList[activeReview]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousal-container">
          <button
            onClick={this.onClickLeftArrow}
            className="left-arrow"
            type="button"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActivePreview(previewFunction)}
          <button
            onClick={this.onClickRightArrow}
            className="right-arrow"
            type="button"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
