import React from 'react'
import 'containers/homeContainer/styles.scss'
import Button from 'components/Button'
import { useNavigate } from 'react-router-dom'

export default function HomeContainer() {
  const navigate = useNavigate()
  return (
    <div className='homeContainerWrapper'>
      <div className='homeContainerButtonsWrapper'>
        <Button
          onSubmit={() => navigate('/cancel-membership')}
          name='Cancellation Survey'
        />
        <Button
          onSubmit={() => navigate('/create-service')}
          name='Create Service'
        />
      </div>
    </div>
  )
}
