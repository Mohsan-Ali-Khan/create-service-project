import React, { useState } from 'react'
import { BsChevronDown, BsThreeDots, BsPlusLg } from 'react-icons/bs'
import MONTH_NAMES from 'constants'

import 'components/PlansForm/styles.scss'

export default function PlansForm({
  // openNewPlan,
  data,
  isOpened,
  setPlansData,
}) {
  const [opened, setOpened] = useState(isOpened)
  const [option, setOption] = useState(false)
  const [plansFormRecord, setPlansFormRecord] = React.useState(data)

  const submitHandler = (e) => {
    e.preventDefault()
    setPlansData((old) => [...old, plansFormRecord])
    setPlansFormRecord(data)
  }

  const handleNameChange = (event) => {
    setPlansFormRecord({
      ...plansFormRecord,
      plansName: event.target.value,
    })
  }
  const handlePriceChange = (event) => {
    setPlansFormRecord({
      ...plansFormRecord,
      price: event.target.value,
    })
  }

  const handleBillEveryChange = (event) => {
    setPlansFormRecord({
      ...plansFormRecord,
      billEvery: event.target.value,
    })
  }

  const handleBillingCycleChange = (event) => {
    setPlansFormRecord({
      ...plansFormRecord,
      billingCycle: event.target.value,
    })
  }
  const handleBillingTypeChange = (val) => {
    setPlansFormRecord({
      ...plansFormRecord,
      billingType: val,
    })
  }

  return (
    <div>
      {opened ? (
        <form className='product-form' onSubmit={submitHandler}>
          <div className='pricing-Wrapper'>
            <div className='pricing-Wrapper'>
              <label className='pricing-label'>Plan Name</label>
              <label className='pricing-label2'>Billing Type</label>
            </div>

            <div className='pricing-Wrapper'>
              <input
                type='text'
                name='plansName'
                className='input-1'
                placeholder='E.g. Monthly, Lifetime, etc'
                value={plansFormRecord.plansName}
                onChange={handleNameChange}
              />
              <div className='plan__btn-group'>
                <div
                  onClick={() => {
                    handleBillingTypeChange('Recurring')
                  }}
                  onKeyDown={() => {
                    handleBillingTypeChange('Recurring')
                  }}
                  name='billingType'
                  tabIndex={0}
                  role='button'
                  className={`${
                    plansFormRecord.billingType === 'Recurring'
                      ? 'plan__selected-menu'
                      : 'plan__abc'
                  }`}
                >
                  Recurring
                </div>
                <div
                  onClick={() => {
                    handleBillingTypeChange('One time')
                  }}
                  tabIndex={0}
                  role='button'
                  name='billingType'
                  onKeyDown={() => {
                    handleBillingTypeChange('One time')
                  }}
                  className={`${
                    plansFormRecord.billingType === 'One time'
                      ? 'plan__selected-menu'
                      : 'plan__abc'
                  }`}
                >
                  One time
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              plansFormRecord.billingType === 'Recurring'
                ? 'priceAndBill-Wrapper'
                : 'priceAndBill-WrapperOneTime'
            }`}
          >
            <div
              className={`${
                plansFormRecord.billingType === 'Recurring'
                  ? 'priceAndBill-Wrapper'
                  : 'priceAndBill-Wrap'
              }`}
            >
              <label
                className={`${
                  plansFormRecord.billingType === 'One time'
                    ? 'test'
                    : 'priceAndBill-label'
                }`}
              >
                Price
              </label>
              {plansFormRecord.billingType === 'Recurring' && (
                <label className='priceAndBill-label'>Bill Every</label>
              )}
            </div>

            <div className='priceAndBill-Wrapper'>
              <input
                type='text'
                className='input-1'
                name='price'
                placeholder='0.00'
                value={plansFormRecord.price}
                onChange={handlePriceChange}
              />
              {plansFormRecord.billingType === 'Recurring' && (
                <div className='productBillEvery'>
                  <input
                    type='text'
                    className='input-2'
                    placeholder='1'
                    name='billEvery'
                    value={plansFormRecord.billEvery}
                    onChange={handleBillEveryChange}
                  />
                  <select className='surveyCard__productSelect'>
                    {MONTH_NAMES?.map(({ id: monthId, name }) => (
                      <option key={monthId} value={`${name}`}>
                        {`${name}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
          {plansFormRecord.billingType === 'Recurring' && (
            <div className='billingCycles-Wrapper'>
              <div className='billingCycles-Wrapper'>
                <label className='billingCycles-label'>
                  No. of Billing cycyles (Optional)
                </label>

                <input
                  type='text'
                  className='input-1'
                  placeholder='E.g. 6, 12, etc.'
                  name='billingCycle'
                  value={plansFormRecord.billingCycle}
                  onChange={handleBillingCycleChange}
                />

                <p className='billingDesc'>
                  Leave this empty to auto-renew this plan until canceled.
                </p>
              </div>
            </div>
          )}
          <div className='addPlan-Wrapper'>
            <button
              type='button'
              className='addPlanButton'
              onClick={submitHandler}
            >
              <BsPlusLg className='product-addIcon' /> Add Another Plan
            </button>
          </div>
        </form>
      ) : (
        <>
          <hr />
          <div className='selectedPlan-Wrapper'>
            <div className='selectedPlan-Wrapper'>
              <label className='selectedPlan-label'>{`${plansFormRecord.plansName}`}</label>
              <label className='selectedPlan-label'>Active</label>
              <p>{`$${plansFormRecord.price}.00`}</p>
              <div className='iconDiv'>
                <BsThreeDots
                  className='optionIcon'
                  onClick={() => {
                    setOption(!option)
                  }}
                />
                {option === true && (
                  <div className='optionsList'>
                    <p className='duplicatePlanTypo'>Duplicate Plan</p>
                    <p className='deletePlanTypo'> Archive Plan</p>
                  </div>
                )}
              </div>

              <div className='iconDiv2'>
                <BsChevronDown onClick={() => setOpened(true)} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
