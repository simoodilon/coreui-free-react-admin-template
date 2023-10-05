import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDataTransferDown } from '@coreui/icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

const GenerateFile = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [inputValue, setInputValue] = useState('')

  const dateString = (stringDate) => {
    const date = new Date(stringDate).toLocaleDateString('en-US')

    let values = date.split('/')

    const formattedDate = `${values[1]}/${values[0]}/${values[2]}`

    return formattedDate
  }

  const handleApiRequest = async () => {
    // Define the API endpoint URL
    const apiUrl = 'http://192.168.2.66:887/GenerateFM1000' //  API endpoint URL
    //const apiUrl = 'https://jsonplaceholder.typicode.com/posts' //  API endpoint URL

    var today = dateString(new Date().toLocaleDateString('en-US'))
    console.log(today)
    // Create the request payload
    const requestData = {
      startDate: dateString(new Date(startDate).toLocaleDateString('en-US')), // Use the selected start date
      endDate: dateString(new Date(endDate).toLocaleDateString('en-US')), // Use the selected end date
      bankRef: inputValue, // Use the input field value
    }
    console.log(JSON.stringify(requestData))

    await axios
      .post(apiUrl, JSON.stringify(requestData), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        // Handle the successful API response
        console.log('API Response:', response)
      })
      .catch((error) => {
        // Handle API request error
        console.error('API Request Error:', error)
      })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Generate Sesame File</strong> <small>Select format</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Generate Sesame File in Preferred version</p>
            <div href="components/buttons">
              {['Generate'].map((state, index) => (
                <CRow className="align-items-center mb-3" key={index}>
                  <CRow className="align-items-center mb-3">
                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                      Date Range
                    </CCol>
                    <CCol>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsStart
                        isClearable
                        placeholderText="Start Date"
                      />
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsEnd
                        isClearable
                        placeholderText="End Date"
                      />
                    </CCol>
                  </CRow>
                  <CRow className="align-items-center mb-3">
                    <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                      Bank id
                    </CCol>
                    <CCol>
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Enter Bank Id"
                      />
                    </CCol>
                  </CRow>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </CCol>
                  <CCol>
                    <CButton color="link" onClick={handleApiRequest}>
                      <CIcon icon={cilDataTransferDown} className="me-2" />
                      FM1000
                    </CButton>
                    <CButton color="link">
                      <CIcon icon={cilDataTransferDown} className="me-2" />
                      Bilan Actif
                    </CButton>
                    <CButton color="link">
                      <CIcon icon={cilDataTransferDown} className="me-2" />
                      Bilan Passif
                    </CButton>
                    <CButton color="link">
                      <CIcon icon={cilDataTransferDown} className="me-2" />
                      Compte De Resultat Produit
                    </CButton>
                    <CButton color="link">
                      <CIcon icon={cilDataTransferDown} className="me-2" />
                      Compte De Resultat Charges
                    </CButton>
                  </CCol>
                </CRow>
              ))}
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GenerateFile
