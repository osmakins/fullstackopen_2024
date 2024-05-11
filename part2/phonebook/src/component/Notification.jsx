
const Notification = ({ notify }) => {
    if (notify.length === 0) {
      return null
    }
  
    if (notify[0] === 'error') {
      return <div className="error">{notify[1]}</div>
    }
  
    if (notify[0] === 'success') {
      return <div className="success">{notify[1]}</div>
    }
  }
  
  export default Notification;