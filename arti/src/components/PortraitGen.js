import '../index.css'
import GenerateBtn from './GenerateBtn'

const PortraitGen = () => {
  return (

    <div className='portrait-gen-container'>
      <div className='bg-circle circle1'></div>
      <div className='bg-circle circle2'></div>
      <div className='bg-circle circle3'></div>
      <div className='bg-circle circle4'></div>

      <div className='tiny-lines line1'></div>
      <div className='tiny-lines line2'></div>
      <div className='tiny-lines line3'></div>
      <div className='tiny-lines line4'></div>

      {/* <header>
      <h1>
        Portrait Generator
      </h1>
      </header> */}

      <div className='portrait-input-container'>
        <h3>
          Enter a detailed description for what you want to create.
        </h3>
        
        <div className='generate-bar'>
        <input className='portrait-input' 
        type="text" 
        placeholder='Enter your prompt...'/>
        <GenerateBtn text= 'Generate'/>
        </div>
        
      </div>
      
    </div>


  )
}


export default PortraitGen