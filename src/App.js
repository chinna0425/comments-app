import Comments from './components/Comments'

import './App.css'

const App = () => <Comments />

export default App

/* <div className="commentdesign-container1">
          <p>{count} Comments</p>
          <ul className="unordered-list">
            {comments.map(eachitem => (
              <Commentsitem eachitem={eachitem} key={eachitem.id} />
            ))}
          </ul>
        </div>
      </div> 
      
      
      
 const {inputtext, textareatext, count, comments} = this.state
    const startname = inputtext[0]
    console.log(inputtext)
    console.log(textareatext)
    const latest = {inputtext, textareatext, startname}
    const additem = [...comments, latest]
    this.setState(prevstate => ({
      inputtext: '',
      textareatext: '',
      count: prevstate.count + 1,
      comments: additem,
      id: uuidv4(),
    }))     */
