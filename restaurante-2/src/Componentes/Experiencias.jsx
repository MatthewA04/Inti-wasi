import '../index.css'

export default function Experiencias({imgExperciencias, tituloExperiencia}) {
    
  return (
        <>
            <div className='contenedorExperiencia'>
                <div className='tituloExperiencia'>
                <h3 >{tituloExperiencia}</h3>
                </div>
                <img className='imgExperiencia' src={imgExperciencias}></img>

            </div>
        </>
  )
}
