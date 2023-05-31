import React, {useState} from 'react';

const Reservar = () => {
    const [form, setForm] = useState(false);
  return (
    <>
    {
        form ? (<form>
        <div>
            <label>Name </label>
            <input type='text' placeholder='Nombre completo'></input>
        </div>
        <div>
            <label>Telefono </label>
            <input type='text' placeholder='79126364'></input>
        </div>
        <div>
            <label>Fecha </label>
            <input type='text' placeholder='31/05/2023'></input>
        </div>
        <button className='tour-card bg-green-500 mb-2 shadow-lg rounded-md py-1 w-1/2 md:w-1/3 mx-auto flex-wrap flex justify-center items-center'>
            Enviar
        </button>
        
    </form>)
       : (    
        <button className='tour-card bg-green-500 mb-2 shadow-lg rounded-md py-2 w-1/2 md:w-1/3 mx-auto flex-wrap flex justify-center items-center' 
                onClick={()=> setForm(true)}> Reservar</button>
    
        )}
     
    
    </>
    
    
    
    
    
  );
};

export default Reservar;