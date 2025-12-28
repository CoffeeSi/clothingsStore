export const Header = () => {

  return (
    <>
      <div className="header w-full flex pl-24 pr-24 h-24 items-center">
        <div className="nav flex">
          <ul className="flex gap-8 grow">
            <li><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0" width="30px" height="30px" viewBox="0 0 30 30">
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg></li>
            <li>Home</li>
            <li>Collections</li>
            <li>New</li>
          </ul>
        </div>
        <div className="logo flex justify-center grow-4">Clothes</div>
        <div className="panels flex flex-row-reverse grow">
          <ul className="flex gap-8 items-center">
            <li><img className="rotate-315" width="24px" src="./src/assets/heart.png"></img></li>
            <li><a href="">Cart</a></li>
            <li><img width="24px" src="./src/assets/profile.png"></img></li>
          </ul>
        </div>
      </div>      
    </>
  )
}