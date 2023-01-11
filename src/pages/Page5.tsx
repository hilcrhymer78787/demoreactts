import React from 'react';
import axios from "axios";
type HeroTeam = {
  squadName: string,
  homeTown: string,
  formed: number,
  secretBase: string,
  active: boolean,
  members: Member[]
}
type Member = {
  name: string,
  age: number,
  secretIdentity: string,
  powers: string[]
}

export function Page5() {
  const [heroTeam, setHeroTeam] = React.useState<HeroTeam | null>(null);
  React.useEffect(() => {
    const requestConfig = {
      url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      method: "GET",
    };
    axios(requestConfig)
      .then((res) => {
        setHeroTeam(res.data);
      })
      .catch(() => {
        alert("通信に失敗しました");
      })
  }, []);
  const [showAnswer, setShowAnswer] = React.useState(false);
  return (
    <>
      <section className="goal">
        <h2>非同期通信（axios）</h2>
        <div className="wrap">
          {heroTeam &&
            <ul>
              <li>チーム名 ...... {heroTeam.squadName}</li>
              <li>活動範囲 ...... {heroTeam.homeTown}</li>
              <li>結成 ...... {heroTeam.formed}</li>
              <li>拠点 ...... {heroTeam.secretBase}</li>
              <li>活動しているか ...... {heroTeam.active ? 'している' : 'していない'}</li>
              <li>
                隊員 ......
                <ul>
                  {heroTeam.members.map((member, index) => (
                    <li key={index.toString()}>
                      <ul>
                        <li>名前 ...... {member.name}</li>
                        <li>年齢 ...... {member.age}</li>
                        <li>正体 ...... {member.secretIdentity}</li>
                        <li>能力 ......
                          <ul>
                            {member.powers.map((power, powerIndex) => (
                              <li key={powerIndex.toString()}>{power}</li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          }
        </div>
      </section>
      <hr className="border" />
      <p className="border_txt">これ以下は模写不要</p>
      <section className="question">
        <h2>問題5</h2>
        <div className="wrap">
          <p className="question_txt">
            <a href="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json">https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json</a><br />
            このAPIからデータを取得し上記のように表示させなさい<br />
            <br />
            【注意】<br />
            import axios from "axios";<br />
            yarn add axios<br />
            が必要
          </p>
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
import axios from "axios";
type HeroTeam = {
  squadName: string,
  homeTown: string,
  formed: number,
  secretBase: string,
  active: boolean,
  members: Member[]
}
type Member = {
  name: string,
  age: number,
  secretIdentity: string,
  powers: string[]
}

export function Page9() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [heroTeam, setHeroTeam] = React.useState<HeroTeam | null>(null);
  React.useEffect(() => {
    setIsLoading(true);
    const requestConfig = {
      url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
      method: "GET",
    };
    axios(requestConfig)
      .then((res) => {
        setHeroTeam(res.data);
      })
      .catch(() => {
        alert("通信に失敗しました");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);
  if (isLoading) return <p>ローディング中...</p>
  if (!heroTeam) return <p>データがありません</p>
  return (
    <>
      <ul>
        <li>チーム名 ...... {heroTeam.squadName}</li>
        <li>活動範囲 ...... {heroTeam.homeTown}</li>
        <li>結成 ...... {heroTeam.formed}</li>
        <li>拠点 ...... {heroTeam.secretBase}</li>
        <li>活動しているか ...... {heroTeam.active ? 'している' : 'していない'}</li>
        <li>
          隊員 ......
          <ul>
            {heroTeam.members.map((member, index) => (
              <li key={index.toString()}>
                <ul>
                  <li>名前 ...... {member.name}</li>
                  <li>年齢 ...... {member.age}</li>
                  <li>正体 ...... {member.secretIdentity}</li>
                  <li>能力 ......
                    <ul>
                      {member.powers.map((power, powerIndex) => (
                        <li key={powerIndex.toString()}>{power}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </li>
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