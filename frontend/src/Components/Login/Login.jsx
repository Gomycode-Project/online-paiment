import React from 'react'
import { Register } from '../Register/Register'

export const Login = () => {
  return (
    <div>
        <form>
            <input placeholder='Numéro de téléphone' type="number" />
            <input placeholder='Mot de passe' type="text" />
            <button>login</button>
            <p>Don't have an account? <Register/></p>
        </form>
    </div>
  )
}
