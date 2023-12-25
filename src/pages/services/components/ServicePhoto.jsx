import './servicePhoto.css'

const ServicePhoto = ({ imgMobile, imgDesktop }) => {
  return (

    <div className='servicePhoto'>
      <picture>
        <source srcSet={imgMobile} media='(max-width: 767px)' />
        <source srcSet={imgDesktop} media='(min-width: 768px)' />
        <img className="serviceImg" src={imgMobile} alt="Services Img" />
      </picture>
    </div>

  )
}

export default ServicePhoto