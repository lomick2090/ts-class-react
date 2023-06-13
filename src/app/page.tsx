"use client";

import Parrot from "@/utils/Parrot";
import { SetStateAction, useState } from "react";

interface ParrotInterface {
  name: string;
  speak: Function;
  announce: Function;
  learn: Function;
}

export default function Home() {
  const [input, setInput] = useState('');
  const [parrotList, setParrotList] = useState<ParrotInterface[]>([])

  function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
    setInput(event.target.value)
  }
  
  function handleSubmit(input: string) {
    let newParrot: ParrotInterface = new Parrot(input) 
    setParrotList(prevList => {
      return [
        ...(prevList ?? []),
        newParrot
      ]
    })
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <label className="">
          Name:
          <input
            className="border-[1px] border-black"
            type='text'
            value={input}
            onChange={handleChange}
            name="name"
            placeholder="Polly"
          />
        </label>
        <button
          className="border-2 border-black rounded-lg p-[3px]"
          onClick={() => handleSubmit(input)}
        >
          Create New Parrot
        </button>
      </div>

      <div>

        
      </div>
    </div>
  )
}
