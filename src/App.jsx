function App() {

  return (
    <>
      <header className="header-block">
        <h1 className="header-block__text">Weather Dashborad</h1>
      </header>
      <nav className="nav-block">
        <input className="nav-block__input" type="text" placeholder="Search city"/>
      </nav>
      <main className="main-block">
        <section className="main-block-weather">
          <h2 className="main-block-weather__text">City</h2>
          <div>
            icon
          </div>
          <div>
            <p>high temp</p>
            <p>description</p>
          </div>
        </section>
        <section>
          <p>wind</p>
          <div>  
            <p>value</p>
            <p>icon</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
