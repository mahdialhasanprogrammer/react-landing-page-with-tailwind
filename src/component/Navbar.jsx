import Button from "./buttonCommon";
function Nav() {
  return (
    <>
      <header className="container mx-auto font-poppins ">
        <nav className="flex  gap-5 flex-col md:flex-row justify-between h-[72px] items-center lg:mx-0 mx-3">
          <div>
            <img src="/images/brand_logo.png" alt="brand logo" />
          </div>
          <ul className="flex gap-5 uppercase">
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div>
            <Button>Login</Button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Nav;
