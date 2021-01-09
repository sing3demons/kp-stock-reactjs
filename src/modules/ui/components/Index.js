import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Index() {
  const history = useHistory()

  return (
    <>
      <Button onClick={() => history.push('users')}>Go To Login</Button>
    </>
  )
}
