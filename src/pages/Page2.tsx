import React from 'react';
import styled from 'styled-components';

export function Page2() {
  const [isShow, setIsShow] = React.useState(false);
  const isShowTrue = () => {
    setIsShow(true)
  }
  const isShowFalse = () => {
    setIsShow(false)
  }
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <>
      <section className="goal">
        <h2>表示・非表示</h2>
        <div className="wrap">
          <button onClick={isShowTrue}>表示する</button>
          <button onClick={isShowFalse}>非表示にする</button>
          {isShow && <Text>ローディング中...</Text>}
        </div>
      </section>
      <hr className="border" />
      <p className="border_txt">これ以下は模写不要</p>
      <section className="question">
        <h2>問題2</h2>
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
import styled from 'styled-components';
export function Page9() {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const isShowTrue = () => {
    setIsShow(true)
  }
  const isShowFalse = () => {
    setIsShow(false)
  }
  return (
    <>
      <button onClick={isShowTrue}>表示する</button>
      <button onClick={isShowFalse}>非表示にする</button>
      {isShow && <Text>ローディング中...</Text>}
    </>
  );
}
const Text = styled.p${'`'}
  color: blue;
${'`'}
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
const Text = styled.p`
  color: blue;
`