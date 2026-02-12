import './App.css'

import ApplicationContainer from './components/ApplicationContainer'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {

  return (
    <div className='flex flex-col gap-10 items-center justify-between w-full h-full'>
      <Header />
      <ApplicationContainer />
      <Footer />
    </div>
  )
}
