import ar_Mushaf_Almadina from '@/lib/constants'
import { useState } from 'react'
import { ArrowBigLeft } from 'lucide-react'
import { ArrowBigRight } from 'lucide-react'
import { Button } from './ui/button'

const QuranPages = () => {
  const [startIndex, setStartIndex] = useState(2)

  const loadImages = () => {
    const loadedImages = []
    for (
      let i = startIndex;
      i < Math.min(startIndex + 2, ar_Mushaf_Almadina.length);
      i++
    ) {
      const image = new Image()
      image.src = `/src/assets/ar_Mushaf_Almadina-${i}.png`
      loadedImages.push(image)
    }
    return loadedImages
  }

  const handleNext = () => {
    if (startIndex < ar_Mushaf_Almadina.length - 2) {
      setStartIndex(startIndex + 2)
    }
  }

  const handlePrevious = () => {
    if (startIndex > 2) {
      setStartIndex(startIndex - 2)
    }
  }

  return (
    <div className='w-full  min-w-[1200px]'>
      <main className='flex flex-row h-[95%] justify-center '>
        <Button className='h-screen' variant='ghost' onClick={handleNext}>
          <ArrowBigLeft />
        </Button>
        {loadImages()
          .reverse()
          .map((image, index) => (
            <div key={index} className='w-full'>
              <img
                className='w-full h-full'
                src={image.src}
                alt={`Image ${startIndex + index}`}
              />
            </div>
          ))}
        <Button className='h-screen' variant='ghost' onClick={handlePrevious}>
          <ArrowBigRight />
        </Button>
      </main>
      <footer className='h-[5%] flex justify-center items-center'>
        footer
      </footer>
    </div>
  )
}

export default QuranPages
