function App() {
  return (
    <>
      <header className="container max-auto">
        <nav className="flex justify-between">
          <div>
            <img url="./assets/images/brand_logo.png" alt="brand logo" />
          </div>
          <ul className="flex gap-5">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Location</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <div>
            <button type="button" className="bg-primary text-white px-5 py-2 ">
              Login
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
