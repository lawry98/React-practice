import { useContext, useState } from "react"
import { CountContext } from "./context";
import { Navigate } from "react-router-dom";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, isEven } from "./store/atoms/count";


function App() {
    
  // wrap anyone that wants to use the teleported value inside a provider
  // recoil, redux, Themes in mUI
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
    <EvenSelector></EvenSelector>
  </div>
}

function EvenSelector(){
  const isEvenval = useRecoilValue(isEven);
  if(isEvenval){
    return(
      <div>
        It is even.
      </div>
    )
  }
  return ;
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log('rerender!');
  return <div>
    <button onClick={() => {
      setCount(count => count+1);
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count-1);
    }}>Decrease</button>
  </div>
}

export default App