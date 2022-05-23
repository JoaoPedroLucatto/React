import { useState, useEffect } from "react"

export const useFetch = (url, method = 'get') => {

    const [reponse, setReponse] = useState({
        data: null,
        loading: true
    })

    useEffect(function() {
        fetch(url, {method})
            .then( resp=> resp.json())
            .then( json=> setReponse({
                data: json,
                loading: false
            }))
    },[url, method])

    return reponse

}