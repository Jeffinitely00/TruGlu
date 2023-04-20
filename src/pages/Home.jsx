import React from 'react'
import homeStore from '../stores/homeStore'

export default function Homes() {
  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div>Home</div>
  )
}
