const validateMessage = values => {
    const errors = {}

    if (!values.message) {
        errors.message = 'Le message est requis.'
    } else if (values.message.length > 280) {
        errors.message = 'Le message ne doit pas excéder 280 caractères.'
    }
    // si on avait d'autres input comme mail mot de passe etc ont pourrait mettre nos conditions (regex) ici avec values.mail, values.mdp etc
    return errors
}

export default validateMessage