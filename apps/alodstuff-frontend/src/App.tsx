import './App.css'

import ApplicationContainer from './components/ApplicationContainer'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App() {

  return (
    <div className="flex flex-col min-h-screen items-center p-3">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <ApplicationContainer />
      </div>
      <Footer />
    </div>
  )
}
