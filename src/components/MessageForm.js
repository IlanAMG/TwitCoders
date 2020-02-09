import React from 'react'

export default function MessageForm({ handleSubmit, handleKeyDown, handleChange, values, errors, user }) {
    return (
        <form onSubmit={handleSubmit} className='message-form-container'>
            <div className="message-form">
                <div>
                    <img className='profil-picture' src={user.photoURL} alt='Profil'/>
                </div>
                <textarea 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown} 
                    value={values.message}
                    name='message' 
                    placeholder='Quoi de neuf ?' />
            </div>

            {errors.message && <p className='error-text'>{errors.message}</p>}

            <footer>
               { values.message.length > 280 ? <p>0</p> : <p>{280 - values.message.length}</p>}
                <button type='submit' disabled={values.message.length > 280 || values.message.length === 0}>
                    Tweeter
                </button>
            </footer>
        </form>
    )
}
