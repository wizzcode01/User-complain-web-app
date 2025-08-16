import AfterCardBackground from '../assets/afterContentImage/watercolor-texture-background.jpg'
import AfterHero from '../components/AfterHero'
import Cards from '../components/Cards'

const AfterCardLayout = ({children}) => {
    return (
        <div className='relative w-full'>
            <div className='absolute inset-0 rotate-270 w-full h-auto bg-cover bg-no-repeat bg-center py-16 space-y-12' 
              style={{backgroundImage: `url(${AfterCardBackground})`}}>
            </div>

            <div className="relative py-16 space-y-12">
                {children}
            </div>
        </div>
    )
}
export default AfterCardLayout