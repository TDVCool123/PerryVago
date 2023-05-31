import { habitaciones } from '../data/data'
import Titulo from './Titulo'
import Habitacion from './Habitacion'
const Habitaciones = () => {
  return (
    <section className='section' id='habitaciones'>
      <Titulo Titulo='Habitaciones' />

      <div className='section-center featured-center'>
        {habitaciones.map((habitacion) => {
          return <Habitacion {...habitacion} key={habitacion.id} />
        })}
      </div>
    </section>
  )
}
export default Habitaciones;
