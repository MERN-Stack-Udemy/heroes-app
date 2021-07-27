import { useState } from "react"

export const useForm = ( initialState ) => {
  
  const [formState, setFormState] = useState(initialState)
 
  const reset = () =>{
    setFormState( initialState );
  }

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ] : target.value
    })
  }

  return [
    formState,
    handleChange,
    reset
  ]
}
