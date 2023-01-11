import React from 'react';
import styled from 'styled-components';

export function Page3() {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [genderError, setGenderError] = React.useState("");
  const [num, setNum] = React.useState(0);
  const onClickSubmit = () => {
    let isError = false
    setNameError("")
    setEmailError("")
    setGenderError("")
    if (name === "") {
      setNameError("名前は必須です");
      isError = true;
    }
    if (!(/.+@.+\..+/.test(email))) {
      setEmailError("正しい形式で入力してください");
      isError = true;
    }
    if (gender === "") {
      setGenderError("性別を選択してください");
      isError = true;
    }
    if (isError) return;
    alert(`
    送信に成功しました！！
    ーーーーーーーーーーー
    名前：${name}
    メール：${email}
    性別：${gender}
    転職回数：${num}
    `);
  }
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <>
      <section className="goal">
        <h2>フォーム入力</h2>
        <div className="wrap">
          <ul>
            <li>
              <p>名前</p>
              <input value={name} onChange={(e) => { setName(e.target.value) }} />
              <ErrorText>{nameError}</ErrorText>
            </li>
            <li>
              <p>メール</p>
              <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
              <ErrorText>{emailError}</ErrorText>
            </li>
            <li>
              <p>性別</p>
              <input type="radio" value="男性" checked={gender === "男性"} onChange={(e) => { setGender(e.target.value) }} />男性
              <input type="radio" value="女性" checked={gender === "女性"} onChange={(e) => { setGender(e.target.value) }} />女性
              <ErrorText>{genderError}</ErrorText>
            </li>
            <li>
              <p>転職回数</p>
              <select value={num} onChange={(e) => { setNum(Number(e.target.value)) }}>
                <option value={0}>0回</option>
                <option value={1}>1回</option>
                <option value={2}>2回</option>
              </select>
            </li>
          </ul>
          <button onClick={onClickSubmit}>送信</button>
        </div>
      </section>
      <hr className="border" />
      <p className="border_txt">これ以下は模写不要</p>
      <section className="question">
        <h2>問題3</h2>
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
export function Page3() {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [genderError, setGenderError] = React.useState("");
  const [num, setNum] = React.useState(0);
  const onClickSubmit = () => {
    let isError = false
    setNameError("")
    setEmailError("")
    setGenderError("")
    if (name === "") {
      setNameError("名前は必須です");
      isError = true;
    }
    if (!(/.+@.+.+/.test(email))) {
      setEmailError("正しい形式で入力してください");
      isError = true;
    }
    if (gender === "") {
      setGenderError("性別を選択してください");
      isError = true;
    }
    if (isError) return;
    alert(${'`'}
    送信に成功しました！！
    ーーーーーーーーーーー
    名前：${'$'}{name}
    メール：${'$'}{email}
    性別：${'$'}{gender}
    転職回数：${'$'}{num}
    ${'`'});
  }
  return (
    <>
      <ul>
        <li>
          <p>名前</p>
          <input value={name} onChange={(e) => { setName(e.target.value) }} />
          <ErrorText>{nameError}</ErrorText>
        </li>
        <li>
          <p>メール</p>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} />
          <ErrorText>{emailError}</ErrorText>
        </li>
        <li>
          <p>性別</p>
          <input type="radio" value="男性" checked={gender === "男性"} onChange={(e) => { setGender(e.target.value) }} />男性
          <input type="radio" value="女性" checked={gender === "女性"} onChange={(e) => { setGender(e.target.value) }} />女性
          <ErrorText>{genderError}</ErrorText>
        </li>
        <li>
          <p>転職回数</p>
          <select value={num} onChange={(e) => { setNum(Number(e.target.value)) }}>
            <option value={0}>0回</option>
            <option value={1}>1回</option>
            <option value={2}>2回</option>
          </select>
        </li>
      </ul>
      <button onClick={onClickSubmit}>送信</button>
    </>
  );
}
const ErrorText = styled.p${'`'}
  color: red;
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
const ErrorText = styled.p`
  color: red;
`