import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(3);

  const [unReadNotifications, setUnReadNotifications] = useState([
    { id: 1, username: "Mark Webber", isRead: false },

    { id: 2, username: "Angela Gray", isRead: false }, 

    { id: 3, username: "Jacob Thompson", isRead: false }
  ])

  function handleRead(id) {
    const newUnReadNotifications = unReadNotifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setUnReadNotifications(newUnReadNotifications);
    setCount(newUnReadNotifications.filter((notification) => !notification.isRead).length);
  }

  function markAllAsRead() {
    const updated = unReadNotifications.map(notification => {
      return { ...notification, isRead: true }
    })

    setUnReadNotifications(updated)
    setCount(updated.filter(notification => !notification.isRead).length)
  }

  return (
    <>
      <main className='bg-w pad-2r d-flex flex-column gap-2r notifications-box'>
        <section className='d-flex align-i-center just-c-sb'>
          <h2 className='color-navy-950 font-w-800 d-flex gap-05r'>Notifications <span className='bg-blue-950 color-w bor-rad-5 pad-0-07r d-flex align-i-center just-c-center'>{count}</span></h2>
          <p onClick={() => markAllAsRead()} className='color-gray-600 cursor-p tr-a-03s-ea action'>Mark all as read</p>
        </section>

        <section className='d-flex flex-column gap-1r'>

          <div onClick={() => handleRead(1)} className={'d-flex align-i-center gap-1r pad-1r bor-rad-10 cursor-p' + (unReadNotifications[0].isRead === true ? '' : ' bg-blue-100')}>
            <div>
              <img src="assets/images/avatar-mark-webber.webp" alt="Avatar" className='ava' />
            </div>

            <div className='d-flex flex-column gap-05r'>
              <h4 className={'color-gray-600 font-w-500 pos-r' + (unReadNotifications[0].isRead === true ? '' : ' red-dot')}><span className='font-w-800 color-navy-950 cursor-p tr-a-03s-ea username'>Mark Webber</span> reacted yo your recent post <span className='color-gray-600 font-w-800 cursor-p tr-a-03s-ea action'> My first tournament today!</span></h4>
              <p className='color-gray-500'>1m ago</p>
            </div>
          </div>

          <div onClick={() => handleRead(2)} className={'d-flex align-i-center gap-1r pad-1r bor-rad-10 cursor-p' + (unReadNotifications[1].isRead === true ? '' : ' bg-blue-100')}>
            <div>
              <img src="assets/images/avatar-angela-gray.webp" alt="Avatar" className='ava' />
            </div>

            <div>
              <h4 className={'color-gray-600 font-w-500 pos-r' + (unReadNotifications[1].isRead === true ? '' : ' red-dot')}><span className='font-w-800 color-navy-950 cursor-p tr-a-03s-ea username'>Angela Gray</span> followed you</h4>
              <p className='color-gray-500'>5m ago</p>
            </div>
          </div>

          <div onClick={() => handleRead(3)} className={'d-flex align-i-center gap-1r pad-1r bor-rad-10 cursor-p' + (unReadNotifications[2].isRead === true ? '' : ' bg-blue-100')}>
            <div>
              <img src="assets/images/avatar-jacob-thompson.webp" alt="Avatar" className='ava' />
            </div>

            <div>
              <h4 className={'color-gray-600 font-w-500 pos-r' + (unReadNotifications[2].isRead === true ? '' : ' red-dot')}><span className='font-w-800 color-navy-950 cursor-p tr-a-03s-ea username'>Jacob Thompson</span> has joined your group <span className='color-blue-950 font-w-800 cursor-p tr-a-03s-ea action'> Chess Club</span></h4>
              <p className='color-gray-500'>1 day ago</p>
            </div>
          </div>

          <div className='d-flex gap-1r pad-1r'>
            <div>
              <img src="assets/images/avatar-rizky-hasanuddin.webp" alt="Avatar" className='ava' />
            </div>

            <div className='d-flex flex-column gap-1r'>
              <div className='d-flex flex-column gap-05r'>
                <h4 className='color-gray-600 font-w-500'><span className='color-navy-950 font-w-800 cursor-p tr-a-03s-ea username'>Rizky Hasanuddin </span> sent you a private message</h4>
                <p className='color-gray-500'>5 days ago</p>
              </div>

              <div className='pad-1r bor-1-s-gray-500 bor-rad-5 cursor-p tr-a-03s-ea private-msg'>
                <p className='color-gray-600 font-w-500 line-height-1-7'>
                  Hello, thanks for setting up the Chess Club. I've been a member
                  for a few weeks not and I'm already having lots of fun and improving my
                  game.
                </p>
              </div>
            </div>
          </div>

          <div className='d-flex just-c-sb align-i-center pad-1r'>
            <div className='d-flex align-i-center gap-1r'>
              <div>
                <img src="assets/images/avatar-kimberly-smith.webp" alt="Avatar" className='ava' />
              </div>

              <div className='d-flex flex-column gap-05r'>
                <h4 className='color-gray-600 font-w-500'><span className='color-navy-950 font-w-800 cursor-p tr-a-03s-ea username'>Kimberly Smith</span> commented on your picture</h4>
                <p className='color-gray-500'>1 week ago</p>
              </div>
            </div>

            <div>
              <img src="assets/images/image-chess.webp" alt="image chess" className='ava cursor-p tr-a-03s-ea chess-img bor-rad-10' />
            </div>
          </div>

          <div className='d-flex align-i-center gap-1r pad-1r'>
            <div>
              <img src="assets/images/avatar-nathan-peterson.webp" alt="Avatar" className='ava' />
            </div>

            <div className='d-flex flex-column gap-05r'>
              <h4 className='color-gray-600 font-w-500 line-height-1-7'><span className='color-navy-950 font-w-800 cursor-p tr-a-03s-ea username'>Nathan Peterson</span> reacted to your recent post <span className='color-gray-600 font-w-800 cursor-p tr-a-03s-ea action'> 5 end - game strategies to increase your win rate</span></h4>
              <p className='color-gray-500'>2 weeks ago</p>
            </div>
          </div>

          <div className='d-flex align-i-center gap-1r pad-1r'>
            <div>
              <img src="assets/images/avatar-anna-kim.webp" alt="Avatar" className='ava' />
            </div>

            <div className='d-flex flex-column gap-05r'>
              <h4 className='color-gray-600 font-w-500'><span className='color-navy-950 font-w-800 cursor-p tr-a-03s-ea username'>Anna Kim</span> left the group <span className='color-blue-950 font-w-800 cursor-p tr-a-03s-ea action'>Chess Club</span></h4>
              <p className='color-gray-500'>2 weeks ago</p>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
