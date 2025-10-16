import GoodloopLogo from '../assets/goodloop_logo.svg';

export default function Logo() {
  return (
  <>
    <div className="w-24 h-24 mb-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl shadow-[0px_9.600000381469727px_14.40000057220459px_-9.600000381469727px_rgba(253,230,138,1.00)] shadow-[0px_24px_36px_-7.200000286102295px_rgba(253,230,138,1.00)] inline-flex justify-center items-center overflow-hidden">
      <div className="w-14 h-14 relative">
        <img className="w-100 absolute" src={GoodloopLogo} alt="Goodloop logo" />
      </div>
    </div>
    <h2 className='logo-text'>Goodloop</h2>
  </>
  )
}