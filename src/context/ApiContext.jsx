import React, { createContext  } from "react"
import { busca } from '../api/api'

export const ApiContext = createContext({ busca })

/* export const ApiProvider = () => {

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])


  return(
    <ApiContext.Provider>

    </ApiContext.Provider>
  )
} */