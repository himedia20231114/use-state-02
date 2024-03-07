import { useState } from 'react';
import './App.css';

function App() {
  // JavaScript 코드 블락 
  let name = 'World'; 

  //useState Hook : 상태[값]가 변경이 되면 자동으로 랜 더링 
      // import 가 필요함.  : import { useState } from 'react';

  // useState 선언 블락 
  // number 변수는 버튼을 클릭시 random 함수에서 임의의 정수값을 저장 하는 변수 
  // numberStyle 변수는 number 변수의 값이 양수일때는 파란색으로 출력, 음수일때는 빨간색으로 출력  
  const [number , setNumber] = useState(0); 
  const [numberStyle, setNumberStyle] = useState({color:'blue'});

  /*  JavaScript 에서 함수를 생성하는 3가지 방법 : ES6 (2015년 ) 에서 새롭게 추가된 화살표 함수 

  1. 기본 함수 선언 
    function clickEventHandler() {
       // 실행 코드 작성 
    }

  2. 객체형식으로 선언하는 방법 
    const clickEventHandler = function() {
      // 실행 코드 블락 
    }

  3. 화살표(Arrow) 함수 
     const clickEventHandler = () => {
        // 실행 코드 블락 
     }

  */ 
  
  // 버튼을 클릭시 작동 되는 함수 
  const clickEventHandler = () => {
    console.log("함수 호출 성공 !!!!")

    // 램덤 함수를 사용해서 임의의 값을 생성 
    let num = Math.random() * 100 ; 
    console.log (num) ; 

    // 소숫점 이하는 절삭 정수만 출력 
    num = Math.floor(num);
    console.log (num) ; 

    // 생성된 값이 양수이면 파란색으로 스타일링 
    setNumberStyle ( {color:'blue'}); 


    //음수 일때 생성된 값이 음수 이면 빨간색으로 스타일링 적용
    //1 이면 True    : 0.5 이상일때 
    //0 이면 False   : 0.5 미만 일때  
    if ( Math.floor(Math.random() * 2 )) {
      num = -num ; 
      setNumberStyle({color:'red'}); 
      console.log (num)
    }

    setNumber(num); 

  }
  


  return (
    //주석은 작동 됨 

    <div className="App"
        // 주석으로 작동됨 
    >
      {/* 주석은 작동 됨  */} 

      <h1> Hello , {name} </h1>

      <hr />

      <p style = { numberStyle }> Number : {number} </p>

      <button onClick = {clickEventHandler}> 클릭 하세요!! </button>

      <hr /> 
      <div style = {{color:'red', padding : 20}}> jsx 블락에서 인라인 스타일 적용</div>



    </div>
  );
}

export default App;
