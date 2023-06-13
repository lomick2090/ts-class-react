"use client";

import Parrot from "@/utils/Parrot";
import { SetStateAction, useState } from "react";
import { ParrotInterface } from '../interfaces/interfaces'
import ParrotDiv from "@/components/ParrotDiv";

export default function Home() {
  const [input, setInput] = useState('');
  const [parrotList, setParrotList] = useState<ParrotInterface[]>([])

  function handleChange(event: { target: { value: string; }; }) {
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

  const parrotElements = parrotList.map((parrot, index) => {
    return (
      <ParrotDiv key={index} parrot={parrot} />
    )
  })

  return (
    <div className='flex flex-col'>
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
        
      <div className="grid ">
        {parrotElements}
      </div>
    </div>
  )
}
