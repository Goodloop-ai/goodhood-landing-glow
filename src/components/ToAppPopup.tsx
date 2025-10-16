import GoodloopLogo from '../assets/goodloop_logo.svg';

export default function ToAppPopup() {

  return <div className="to-app-popup">
    <div className='logo-container bg-gradient-to-br from-amber-400 to-amber-500'>
      <img src={GoodloopLogo} alt="Goodloop logo" />
    </div>
    <div className='to-app-popup-body'>
      <header>Goodloop</header>
      <p>Open in the Goodloop app</p>
    </div>
    <a href="goodloop://">OPEN</a>
  </div>
}