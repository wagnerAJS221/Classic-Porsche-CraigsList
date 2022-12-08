import './App.css'
import Header from './header/Header'
import MainFeed from './main-body/MainFeed'

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainFeed />
      </main>
    </div>
  )
}

export default App
