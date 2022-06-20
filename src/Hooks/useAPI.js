import { useState, useEffect } from "react";

export const useAPI = ((functionRandom, dependecie=[]) => {
    const [inf, setInf] = useState()
    const [error, setError] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        setLoad(true)

        functionRandom().then(response =>{
            setInf(response)
        }).catch(error =>{
            setError(error)            
        }).finally(() => {
            setLoad(false)
        })

    }, dependecie)


    return {
            load,
            inf,
            error  
            }
})
