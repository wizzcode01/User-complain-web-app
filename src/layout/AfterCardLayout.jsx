import AfterCardBackground from '../assets/afterContentImage/watercolor-texture-background.jpg'
import AfterHero from '../components/AfterHero'
import Cards from '../components/Cards'

const AfterCardLayout = ({children}) => {
    return (
        <>
            {/* <div className='absolute inset-0 rotate-270 w-full h-auto bg-cover bg-no-repeat bg-center py-16 space-y-12' 
              style={{backgroundImage: `url(${AfterCardBackground})`}}>
            </div> */}

            <div className="py-16 space-y-12 bg-white">
                {children}
            </div>
        </>    
    )
}
export default AfterCardLayout