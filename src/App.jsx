import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

        <Manager />
      </div>
      <Footer />
    </>
  )
}

export default App


// these is crashing because due to strict mode
// developement mode has run 2 times
// production mode it runs correctly

// i was made another folder for backend.
// we are opening backe-end, where we use local storage there we are uisng backend like backend, using APi's crud api's
// we are opening backend folder in separate vs code

// after doing all backend folder now are uisng these

// where ever there is local storage we send fetch req

// for express app, basically we need to cors to get information

// cors is a mechanism basically it protect
// after installing cors it works
// we are using cors in backend file


// finally for password showing table, in js we have one tag which shows like *
// "*".repeat() ->by using these tag we can make anything to star