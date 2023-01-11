import React from 'react';

export function Page1() {
  const [text, setText] = React.useState<string>("");
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <>
      <section className="goal">
        <h2>テキスト取得</h2>
        <div className="wrap">
          <input value={text} onChange={onChangeText} />
          <pre>{JSON.stringify(text, null, 2)}</pre>
        </div>
      </section>
      <hr className="border" />
      <p className="border_txt">これ以下は模写不要</p>
      <section className="question">
        <h2>問題1</h2>
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
export function Page9() {
  const [text, setText] = React.useState<string>("");
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }
  return (
    <>
      <input value={text} onChange={onChangeText} />
      <pre>{JSON.stringify(text, null, 2)}</pre>
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