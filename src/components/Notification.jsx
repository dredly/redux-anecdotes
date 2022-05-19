import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const display = notification.isShown ? '' : 'none'
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: display
  }
  return (
    <div style={style}>
      {notification.message}
    </div>
  )
}

export default Notification