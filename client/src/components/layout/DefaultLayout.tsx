import Sidebarbar from '../Sidebarbar'
import { getYear } from 'date-fns'

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-row h-screen'>
      <Sidebarbar />
      <div className='w-full  min-w-[1200px]'>
        <main className='flex flex-row h-[95%] justify-center '>
          {children}
        </main>
        <footer className='h-[5%] flex justify-center items-center'>
          <div>
            MyQur'an App ©{getYear(new Date())} créé par{' '}
            <a
              href='http://konemory.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='hover:font-medium hover:text-primary'>
                Koné Mory
              </span>
            </a>
            &nbsp;
            <span>+225 07 09 14 97 47</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default DefaultLayout
