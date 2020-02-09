import { useState, useEffect } from 'react'

export const useForm = (initialState, validate, next) => { //ici on change les nom des propriété du hooks car c'est plus global, tout ce joue dans l'endroit où on va utilisé le hook
    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setisSubmitting] = useState(false)

    useEffect(() => {
        if (isSubmitting) {
            const isErrors = Object.keys(errors).length !== 0
            if (isErrors) {
                setisSubmitting(false)
            } else {
                next()
                setisSubmitting(false)
                setValues(initialState)
            }
        } 
    }, [errors, next, isSubmitting, initialState]) //on décide quand useEffect prend effet

    const handleKeyDown = e => {
        if (e.keyCode === 13 && e.ctrlKey) {
        next()
        }
    }

    
    const handleChange = e => {
        e.persist() //pour se souvenir de l'event et éviter une grosse erreur
        setValues(prevValues => ({
            ...prevValues, //cela sert à préserver les potentiels autres input de notre state
            [e.target.name]: e.target.value
        }))
    }  
    
    const handleSubmit = e => {
        e.preventDefault()
        const errors = validate(values) 
        setErrors(errors) // s'il y  des erreurs l'objet restera vide sinon il se remplira avec les erreurs
        setisSubmitting(true)
    }

    return { handleSubmit, handleKeyDown, handleChange, values, errors }
}
