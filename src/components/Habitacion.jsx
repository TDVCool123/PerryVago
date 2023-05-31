import Reservar from "./Reservar";
const Habitacion = ({ image, title, info, duracion, costo }) => {
    return (
      <article className='tour-card bg-blue-200 mb-2 shadow-lg rounded-md py-5 w-1/2 md:w-1/3 mx-auto flex-wrap flex justify-center items-center'>
        <div className='tour-img-container'>
          <img src={image} className='tour-img' alt={title} />
          
        </div>
         <div className='tour-info bg-origin-padding'>
          <div className='tour-title flex-wrap flex justify-center mb-1 text-red-600 text-3xl'>
            <h4>{title}</h4>
          </div>
          <p className="flex-wrap flex justify-center mr-4 ml-4 text-center">{info}</p>
          <div className='tour-footer flex justify-center'>
            <p className="py-3 flex justify-center mr-4">Costo de hospedaje: {costo}Bs</p>
            <p className="py-3 flex justify-center ml-4">Duracion: {duracion} </p>
           
          </div>
          <Reservar/>
           </div>
          
      </article>
    )
  }
  export default Habitacion;
  