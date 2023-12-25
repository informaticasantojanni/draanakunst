import './serviceText.css'

const Service = ({title, description}) => {
  return (
    <div className='serviceText mt-3 mb-3'>
        <h2 className='titleSec3'>{title}</h2>
        <p className='text2'>{description}</p>
    </div>
  )
}

export default Service