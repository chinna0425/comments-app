import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import Commentsitem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {inputtext: '', textareatext: '', count: 0, comments: []}

  inputtext = event => {
    this.setState({inputtext: event.target.value})
  }

  textareastyle = event => {
    this.setState({textareatext: event.target.value})
  }

  isliked = id => {
    const {comments} = this.state
    const latest = comments.map(eachi => {
      if (eachi.id === id) {
        return {...eachi, isActive: !eachi.isActive}
      }
      return eachi
    })
    this.setState({comments: latest})
  }

  isdelete = id => {
    const {comments} = this.state
    const va = comments.filter(eachi => eachi.id !== id)
    this.setState(prevstate => ({count: prevstate.count - 1, comments: va}))
  }

  addcomment = event => {
    event.preventDefault()
    const {inputtext, textareatext, count, comments} = this.state
    const startname = inputtext[0]
    const backcolor =
      initialContainerBackgroundClassNames[Math.floor(Math.random() * 7)]
    const latest = {
      inputtext,
      textareatext,
      startname,
      id: uuidv4(),
      isActive: false,
      backcolor,
      datetime: formatDistanceToNow(new Date()),
    }

    const additem = [...comments, latest]
    if (inputtext !== '' && textareatext !== '') {
      this.setState(prevstate => ({
        inputtext: '',
        textareatext: '',
        count: prevstate.count + 1,
        comments: additem,
      }))
    }
  }

  render() {
    const {inputtext, textareatext, count, comments} = this.state
    return (
      <div className="background-container">
        <div className="commentdesign-container">
          <h1 className="heading">Comments</h1>
          <div className="commentdesign-container1">
            <form className="type-comment-container" onSubmit={this.addcomment}>
              <p className="label-element">
                Say Something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="inputlabel"
                onChange={this.inputtext}
                value={inputtext}
              />
              <br />
              <textarea
                cols="28"
                rows="5"
                placeholder="Your Comment"
                className="textareastyle"
                value={textareatext}
                onChange={this.textareastyle}
              >
                {}
              </textarea>
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-image"
            />
          </div>
        </div>
        <div className="commentdesign-container2">
          <p className="paragraphcomment">
            <span className="count">{count}</span> Comments
          </p>
          <ul className="unordered-list">
            {comments.map(eachitem => (
              <Commentsitem
                eachitems={eachitem}
                key={eachitem.id}
                isliked={this.isliked}
                isdelete={this.isdelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
