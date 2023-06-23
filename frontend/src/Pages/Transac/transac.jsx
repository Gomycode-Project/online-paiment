import React from 'react'

export const transac = () => {
  return (
    <div>
        <form>
            <input placeholder='Numero de Cart' type="number" className='Nmbcrt' />
            <input placeholder='Montant' type="number" />
            <input placeholder='********' type='password'/>
            <button>Valider</button>
            <p>Le Montant que vous avez saisie sera debiter de votr compte</p>
        </form>
    </div>
  )
}