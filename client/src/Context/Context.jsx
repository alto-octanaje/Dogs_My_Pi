import { createContext } from "react";
export const ContextDog= createContext();

export function ContextDogProvaider(props) {
  return (
    <ContextDog.Provider>
        {props.children}
    </ContextDog.Provider>
  )
}

