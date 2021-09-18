import Lottie from 'react-lottie'
import LottieLoading from '../../public/lotties/loading.json'

const Loading = () => {
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLoading,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      className: 'cursor-default'
    }
  }

  return (
    <div className='flex items-center justify-center fixed inset-0 bg-black-25 bg-opacity-25 transition-opacity z-10'>
      <Lottie options={lottieOptions} height={150} width={150} />
    </div>
  )
}

export default Loading
