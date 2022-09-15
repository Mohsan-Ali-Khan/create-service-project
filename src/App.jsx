import { Route, Routes, Navigate } from 'react-router-dom'
import { Suspense } from 'react'
import CancelMembership from 'containers/cancelMembership'
import CancellationSurvey from 'containers/cancellationSurvey'
import CreateService from 'containers/createService'
import HomeContainer from 'containers/homeContainer'

const App = () => (
  <Suspense fallback={<div />}>
    <Routes>
      <Route path='/cancel-membership' element={<CancelMembership />} />
      <Route path='/cancellation-survey' element={<CancellationSurvey />} />
      <Route path='/create-service' element={<CreateService />} />
      <Route path='/' element={<HomeContainer />} />
      <Route path='*' element={<Navigate replace to='/cancel-membership' />} />
    </Routes>
  </Suspense>
)

export default App
