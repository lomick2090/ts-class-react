import { ParrotInterface } from "@/interfaces/interfaces"
import { useState } from "react"

export default function ParrotDiv(props: {parrot: ParrotInterface}) {
    const {parrot} = props
    const [input, setInput] = useState('');

    function handleChange(event: { target: { value: string; }; }) {
        setInput(event.target.value)
    }
      
    function handleSubmit(input: string) {
        parrot.learn(input)
    }

    function handleSpeak() {
        parrot.speak()
    }

    return (
        <div className="p-8 flex flex-col items-center border-[1px] rounded-lg">
          <h1>{parrot.name}</h1>
          <input type="text" name="phrase" placeholder="sqawk" onChange={handleChange} />
          <button onClick={() => handleSubmit(input)}>Submit Phrase</button>
          <button onClick={handleSpeak}>Say Phrase</button>
        </div>
    )

}