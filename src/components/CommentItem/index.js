import './index.css'

const Commentsitem = props => {
  const {eachitems, isliked, isdelete} = props
  const {
    inputtext,
    textareatext,
    startname,
    isActive,
    id,
    backcolor,
    datetime,
  } = eachitems

  const changelike = () => {
    isliked(id)
  }
  const isdeel = () => {
    isdelete(id)
  }
  const vars = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const colors = isActive ? 'spanelement-color' : 'spanelement1'
  const text = isActive ? 'Liked' : 'Like'
  return (
    <li className="list-item1">
      <div className="list-items">
        <h1 className={`heading1 ${backcolor}`}>{startname}</h1>
        <div className="namesandcomment">
          <p className="paragraph">
            {inputtext}
            <span className="spanelement"> {datetime}</span>
          </p>
          <p className="para1">{textareatext}</p>
        </div>
      </div>
      <div className="like-container">
        <div>
          <button className="buttons" type="button" onClick={changelike}>
            <img src={vars} alt="like" />
          </button>
          <span className={colors}>{text}</span>
        </div>
        <button
          className="buttons"
          type="button"
          data-testid="delete"
          onClick={isdeel}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default Commentsitem
