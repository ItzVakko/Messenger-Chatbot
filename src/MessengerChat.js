import React, { useEffect, useState } from 'react'

const MessengerChat = () => {
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    // Check if we're in production (not localhost)
    const hostname = window.location.hostname
    const isProductionEnv = hostname !== 'localhost' && hostname !== '127.0.0.1'
    setIsProduction(isProductionEnv)

    if (!isProductionEnv) {
      console.log(
        'Facebook Messenger Chat is disabled in development environment due to CORS restrictions'
      )
      return
    }

    const loadSDK = () => {
      // Check if FB SDK is already loaded
      if (document.getElementById('facebook-jssdk')) {
        return
      }

      // Add FB root div if it doesn't exist
      if (!document.getElementById('fb-root')) {
        const fbRoot = document.createElement('div')
        fbRoot.id = 'fb-root'
        document.body.appendChild(fbRoot)
      }

      // Create script element
      const script = document.createElement('script')
      script.id = 'facebook-jssdk'
      script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
      script.async = true
      script.defer = true

      // Append script to document
      document.body.appendChild(script)
    }

    if (isProductionEnv) {
      loadSDK()
    }

    // Cleanup function
    return () => {
      const script = document.getElementById('facebook-jssdk')
      if (script) {
        script.remove()
      }
    }
  }, [])

  // Show a placeholder in development environment
  if (!isProduction) {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#0084ff',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          cursor: 'pointer'
        }}
      >
        <div style={{ fontSize: '24px' }}>💬</div>
        <div
          style={{
            position: 'absolute',
            bottom: '70px',
            right: '0',
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
            width: '200px',
            display: 'none'
          }}
        >
          Messenger Chat (Disabled in Dev)
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Facebook Messenger Chat Plugin */}
      <div className="fb-customerchat" attribution="biz_inbox" page_id="576324402235215"></div>
    </div>
  )
}

export default MessengerChat
