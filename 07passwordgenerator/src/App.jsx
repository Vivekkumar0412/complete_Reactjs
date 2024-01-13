import { useState, useCallback, useEffect } from "react";

export default function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setnumberAllowed] = useState(false);
  let [charAllowed, setcharAllowed] = useState(false);
  let [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~{}[]|-=+!#$%^&*()_*?><,.:;'";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(()=>{
    passwordGenerator();
  },[numberAllowed,charAllowed,length,setPassword])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 m-8 text-orange-500 bg-gray-700">
        <h1 className="text-center m-2">PASSWORD GENERATOR</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-2">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 m-5 rounded-md"
            placeholder="PASSWORD"
          />
          <button className="outline-none bg-blue-700 p-5 m-2 rounded-sm">
            COPY
          </button>
        </div>
        <div className="flex text-sm gap-x-2 ">
          <div className="flex items-center gap-x-1 mb-2">
            <input
              type="range"
              min={8}
              max={59}
              value={length}
              className="cursor-pointer mb-4"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked = {numberAllowed}
              id = "numberInput"
              onChange={()=>{setnumberAllowed((prev)=> !prev)}}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
              defaultChecked = {charAllowed}
              id = "charInput"
              onChange={()=>{setcharAllowed((prev)=> !prev)}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}
