import { useState } from 'react'
import { createContext } from 'react'
import {HappyEmoji} from '../Emoji'
import {SleepyEmoji} from '../Emoji'

export const EmojiContext = createContext()

export function EmojiProvider(props) {

  const [mood, setMood] = useState('happy')

  function ChangeMood() {
    if (mood == 'happy') {
      setMood('sleepy')
    }  else {
      setMood('happy')
    }
   }
   const switchEmoji = (mood == 'happy')? <HappyEmoji></HappyEmoji>: <SleepyEmoji></SleepyEmoji>

  return (
    <EmojiContext.Provider value={{ChangeMood, switchEmoji}}>
      {props.children}
    </EmojiContext.Provider>
  )
}


