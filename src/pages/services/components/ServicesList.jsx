import Service from '../components/Service'
import ServicePhoto from '../components/ServicePhoto'
import serviceMobile1 from '../../../assets/services/clinica_medica.jpg'
import serviceDesktop1 from '../../../assets/services/clinica_medica.jpg'
import serviceMobile2 from '../../../assets/services/service_2_mobile.png'
import serviceDesktop2 from '../../../assets/services/service_2_desktop.png'
import serviceMobile3 from '../../../assets/services/service_3_mobile.png'
import serviceDesktop3 from '../../../assets/services/service_3_desktop.png'

import './servicesList.css'

const ServicesList = () => {
  return (

    <div className="main-container">
      <div className="servicesList mt-5 mb-5">
        <div className="serviceList--item1">
          <Service
            title='Clínica Médica'
            description='La Clínica Médica es la columna vertebral de nuestro consultorio, donde nuestros médicos expertos ofrecen atención integral para una variedad de condiciones médicas. Desde la gestión de enfermedades crónicas hasta el tratamiento de dolencias agudas, nuestro equipo de clínicos se dedica a brindar cuidado médico personalizado y de calidad.'
          />
        </div>
        <div className="serviceList--item2">
          <ServicePhoto
            imgMobile={serviceMobile1}
            imgDesktop={serviceDesktop1}
          />
        </div>
        <div className="serviceList--item3">
          <Service
          title='Infectología'
          description='La Infectología es esencial para abordar enfermedades infecciosas y garantizar la salud pública. Nuestros especialistas en Infectología están capacitados para diagnosticar y tratar una amplia gama de infecciones, desde las más comunes hasta las más complejas. Ya sea que necesites asesoramiento preventivo o tratamiento especializado, nuestro equipo está aquí para brindar soluciones efectivas.'
          />
        </div>
        <div className="serviceList--item4">
          <ServicePhoto
          imgMobile={serviceMobile2}
          imgDesktop={serviceDesktop2}
          />
        </div>
        <div className="serviceList--item5">
          <Service
          title='Nutrición'
          description='La Nutrición desempeña un papel fundamental en la salud general, y nuestro equipo de nutricionistas está dedicado a ayudarte a alcanzar tus objetivos de bienestar. Ofrecemos asesoramiento nutricional personalizado para abordar diversas necesidades, ya sea la gestión del peso, la mejora de hábitos alimenticios o el manejo de condiciones médicas específicas. Descubre cómo una nutrición adecuada puede ser la clave para una vida más saludable.'
          />
        </div>
        <div className="serviceList--item6">
          <ServicePhoto
          imgMobile={serviceMobile3}
          imgDesktop={serviceDesktop3}
          />
        </div>
      </div>
    </div>

  )
}

export default ServicesList

























{/* <div className="services mb-5">
<div className="services__description1 element">
  <Service
    title='Servicio__1'
    description='Esta es la descripción del servicio 1'
  />
</div>
<div className="services__photo1 element">
  <ServicePhoto
    imgMobile={serviceImg1}
    imgDesktop={serviceImg1Desktop}
  />
</div>
</div> */}

{/* <div className="services__description2 element">
<Service
  title='Servicio_2'
  description='Esta es la descripción del servicio 2'
/>
</div>
<div className="services__photo2 element">
<ServicePhoto
  imgMobile={serviceImg2}
  imgDesktop={serviceImg2Desktop}
/>
</div>
<div className="services__description3 element">
<Service
  title='Servicio_3'
  description='Esta es la descripción del servicio 3'
/>
</div>
<div className="services__photo3 element">
<ServicePhoto
  imgMobile={serviceImg3}
  imgDesktop={serviceImg3Desktop}
/>
</div> */}