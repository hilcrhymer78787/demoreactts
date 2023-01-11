import React from 'react';
type Todo = {
  name: string,
  isDone: boolean
}
export function Page4() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const onClickAdd = () => {
    setTodos((prevState) => {
      return [...prevState, {
        name: newTodo,
        isDone: false
      }]
    })
    setNewTodo("")
  }
  const onClickDelete = (targetIndex: number) => {
    setTodos((prevState) => {
      return prevState.filter((todo, index) => (index !== targetIndex))
    })
  }
  const onChangeIsDone = (targetIndex: number, checked: boolean) => {
    setTodos((prevState) => {
      return prevState.map((todo, index) => (index !== targetIndex ? todo : {
        ...todo,
        isDone: checked
      }))
    })
  }
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <>
      <section className="goal">
        <h2>CRUDシステム</h2>
        <div className="wrap">
          <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
          <button onClick={onClickAdd}>追加</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index.toString()}>
                <input checked={todo.isDone} onChange={(e) => { onChangeIsDone(index, e.target.checked) }} type="checkbox" />
                <span style={{
                  opacity: todo.isDone ? 0.5 : 1,
                  textDecoration: todo.isDone ? "line-through" : "none"
                }} >{todo.name}</span>
                <button onClick={() => { onClickDelete(index) }}>delete</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr className="border" />
      <p className="border_txt">これ以下は模写不要</p>
      <section className="question">
        <h2>問題4</h2>
        <div className="wrap">
          <p className="question_txt">以上のアプリケーションを作成しなさい</p>
        </div>
      </section>
      <section className="answer">
        <h2>回答</h2>
        {showAnswer && <>
          <button className="answer_btn" onClick={() => {
            setShowAnswer(false)
          }}>回答を非表示</button>
          <div className="wrap">
            <pre>
              {`

import React from 'react';
type Todo = {
  name: string,
  isDone: boolean
}
export function Page9() {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([]);
  const onClickAdd = () => {
    setTodos((prevState) => {
      return [...prevState, {
        name: newTodo,
        isDone: false
      }]
    })
    setNewTodo("")
  }
  const onClickDelete = (targetIndex: number) => {
    setTodos((prevState) => {
      return prevState.filter((todo, index) => (index !== targetIndex))
    })
  }
  const onChangeIsDone = (targetIndex: number, checked: boolean) => {
    setTodos((prevState) => {
      return prevState.map((todo, index) => (index !== targetIndex ? todo : {
        ...todo,
        isDone: checked
      }))
    })
  }
  return (
    <>
      <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
      <button onClick={onClickAdd}>追加</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index.toString()}>
            <input checked={todo.isDone} onChange={(e) => { onChangeIsDone(index, e.target.checked) }} type="checkbox" />
            <span style={{
              opacity: todo.isDone ? 0.5 : 1,
              textDecoration: todo.isDone ? "line-through" : "none"
            }} >{todo.name}</span>
            <button onClick={() => { onClickDelete(index) }}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
`}
            </pre>
          </div>
        </>}
        {!showAnswer && <>
          <button className="answer_btn" onClick={() => {
            setShowAnswer(true)
          }}>回答を表示</button>
        </>}
      </section>
    </>
  );
}