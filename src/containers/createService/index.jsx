import { useState } from 'react'
import PlansForm from 'components/PlansForm'
import { BsPlusLg } from 'react-icons/bs'
import orionServer from '../../assets/orionServer.svg'

import 'containers/createService/styles.scss'

function CreateService() {
  const [spin, setSpin] = useState('plus')
  const [openNewPlan, setOpenNewPlan] = useState(true)
  const [plansData, setPlansData] = useState([])

  const spinTimeout = () => {
    setSpin('loading')
    setTimeout(() => {
      setSpin('stack')
    }, 1500)
  }

  return (
    <div className='main-survey-container'>
      <div className='survey-container'>
        <div className='cancel-survey'>
          <h3 className='serviceFormHeading'>Create Product or Service</h3>
          <h4 className='sectionHeading'>General Info</h4>
          <form className='product-form'>
            <div className='product-Wrapper'>
              <div className='productName-Wrapper'>
                <label className='productName-label'>Product Name</label>
                <label className='productName-label'>
                  Product Image (Optional)
                </label>
              </div>
              <div className='productImage-Wrapper'>
                <input
                  type='text'
                  className='input-1'
                  placeholder='E.g. Website Maintainance, SEO, etc'
                />

                <div className='product-addImageWrapper'>
                  <div className='imageMainDiv'>
                    <div
                      className={`${
                        spin === 'stack'
                          ? 'product-addImageStack'
                          : 'product-addImage'
                      }`}
                      onClick={spinTimeout}
                      onKeyDown={spinTimeout}
                      tabIndex={0}
                      role='button'
                    >
                      {spin === 'loading' && (
                        <button type='button' style={{ border: 'none' }}>
                          <div className='loading-spinner' />
                        </button>
                      )}

                      {spin === 'plus' && (
                        <BsPlusLg className='product-addIcon' />
                      )}

                      {spin === 'stack' && (
                        <img src={orionServer} alt='orion_server' />
                      )}
                    </div>

                    {spin === 'stack' && (
                      <div className='imageButtons'>
                        <p className='editImage'>Edit</p>
                        <p className='removeImage'>Remove</p>
                      </div>
                    )}
                  </div>

                  <p className='product-addImageDesc'>
                    Upload a square image that doesn&apos;t exceed 2 MB
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <h4 className='sectionHeading'>Pricing Plans</h4>
            <p className='product-pricingDesc'>
              Create pricing plans for this product/service. Note that every
              product/service can have multiple plans.
            </p>

            {plansData?.map((p) => (
              <PlansForm
                plansData={plansData}
                isOpened={false}
                data={p}
                setPlansData={setPlansData}
                setOpenNewPlan={setOpenNewPlan}
                openNewPlan={openNewPlan}
              />
            ))}
            <hr className='hrTag' />
            <PlansForm
              isOpened
              setPlansData={setPlansData}
              data={{
                plansName: '',
                billingType: 'Recurring',
                price: '',
                billEvery: '',
                billingCycle: '',
              }}
            />

            <hr />
            <div className='formButtons'>
              <button type='button' className='cancelButton'>
                Cancel
              </button>
              <button type='button' className='createButton'>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateService
