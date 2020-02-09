import React, { useContext, useState, useEffect } from 'react'
import FirebaseContext from '../firebase/context';
import { Message } from './Message';

export const MessageList = () => {
    const { firebase } = useContext(FirebaseContext)
    const [messages, setMessages] = useState([])

    const handleSnapshot = querySnapshot => {
        const messages = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) // ici on récupère l'id du document et on l'assemble avec les données d'un message, et on fait ça pour chaque message avec map()
        setMessages(messages)
    }

    useEffect(() => {
        const getMessages = () => {
            firebase.db
                .collection('messages')
                .orderBy('createAt', 'desc')
                .onSnapshot(handleSnapshot) //onSnapshot pour avoir les données en temps réel
        }

        return getMessages()
    }, [firebase])

    return (
        <div>
            {messages.map(message => (
                    <Message key={message.id} message={message}/>
                ))} 
        </div>
    )
}
