import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CFormSelect } from '@coreui/react'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDataTransferDown } from '@coreui/icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import { saveAs } from 'file-saver'

const GenerateFile = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('1') // Initialize with a default value of '1'

  const apiEndpoints = {
    1: 'http://192.168.2.66:887/GenerateFM1000',
    2: 'http://192.168.2.66:887/GenerateBilanActif',
    3: 'http://192.168.2.66:887/GenerateBilanPassif',
    4: 'http://192.168.2.66:887/GenerateCompteDeResultatProduit',
    5: 'http://192.168.2.66:887/GenerateCompteDeResultatCharges',
  }

  const dateString = (stringDate) => {
    const date = new Date(stringDate).toLocaleDateString('en-US')
    let values = date.split('/')
    const formattedDate = `${values[1]}/${values[0]}/${values[2]}`
    return formattedDate
  }

  const handleApiRequest = async () => {
    const selectedEndpoint = apiEndpoints[selectedOption]

    if (!selectedEndpoint) {
      console.error('Invalid option selected')
      return
    }

    const requestData = {
      startDate: dateString(new Date(startDate).toLocaleDateString('en-US')),
      endDate: dateString(new Date(endDate).toLocaleDateString('en-US')),
      bankRef: inputValue,
    }

    try {
      const response = await axios.post(selectedEndpoint, JSON.stringify(requestData), {
        headers: {
          'Content-Type': 'application/json',
        },
        responseType: 'blob',
      })

      console.log('API Response:', response)

      if (response.data instanceof Blob) {
        let fileName = ''
        switch (selectedOption) {
          case '1':
            fileName = 'FM1000.xlsx'
            break
          case '2':
            fileName = 'BilanActif.xlsx'
            break
          case '3':
            fileName = 'BilanPassif.xlsx'
            break
          case '4':
            fileName = 'ResultatProduit.xlsx'
            break
          case '5':
            fileName = 'ResultatCharges.xlsx'
            break
          default:
            fileName = 'downloadedFile.xlsx'
        }

        saveAs(response.data, fileName)
      }
    } catch (error) {
      console.error('API Request Error:', error)
    }
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
            <div>
              <CRow className="align-items-center mb-3">
                <CRow className="align-items-center mb-3">
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    Date Range
                  </CCol>
                  <CCol>
                    <div className="date-picker-container">
                      <DatePicker
                        className="form-control"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsStart
                        isClearable
                        placeholderText="Start Date"
                        required
                      />

                      <DatePicker
                        className="form-control"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        startDate={startDate}
                        endDate={endDate}
                        selectsEnd
                        isClearable
                        placeholderText="End Date"
                        required
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow className="align-items-center mb-3">
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    Bank id
                  </CCol>
                  <CCol>
                    <input
                      className="form-control"
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Enter Bank Id"
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
                    Download Format
                  </CCol>
                  <CCol>
                    <CFormSelect
                      size="sm"
                      className="mb-3"
                      aria-label="Small select example"
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    >
                      <option value="1">FM1000</option>
                      <option value="2">Bilan Actif</option>
                      <option value="3">Bilan Passif</option>
                      <option value="4">Compte De Resultat Produit</option>
                      <option value="5">Compte De Resultat Charges</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
              </CRow>
              <CButton color="primary" onClick={handleApiRequest}>
                <CIcon icon={cilDataTransferDown} className="me-2" />
                Generate
              </CButton>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default GenerateFile

// import React, { useState } from 'react'
// import { CCard, CCardBody, CCardHeader, CCol, CRow, CFormSelect } from '@coreui/react'
// import { CButton } from '@coreui/react'
// import CIcon from '@coreui/icons-react'
// import { cilDataTransferDown } from '@coreui/icons'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import axios from 'axios'
// import { saveAs } from 'file-saver'

// const GenerateFile = () => {
//   const [startDate, setStartDate] = useState('')
//   const [endDate, setEndDate] = useState('')
//   const [inputValue, setInputValue] = useState('')

//   const dateString = (stringDate) => {
//     const date = new Date(stringDate).toLocaleDateString('en-US')

//     let values = date.split('/')

//     const formattedDate = `${values[1]}/${values[0]}/${values[2]}`

//     return formattedDate
//   }

//   const handleApiRequest = async () => {
//     // Define the API endpoint URL
//     const apiUrl = 'http://192.168.2.66:887/GenerateFM1000' //  API endpoint URL

//     var today = dateString(new Date().toLocaleDateString('en-US'))
//     console.log(today)
//     // Create the request payload
//     const requestData = {
//       startDate: dateString(new Date(startDate).toLocaleDateString('en-US')), // Use the selected start date
//       endDate: dateString(new Date(endDate).toLocaleDateString('en-US')), // Use the selected end date
//       bankRef: inputValue, // Use the input field value
//     }
//     console.log(JSON.stringify(requestData))

//     await axios
//       .post(apiUrl, JSON.stringify(requestData), {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         responseType: 'blob',
//       })
//       .then((response) => {
//         // Handle the successful API response
//         console.log('API Response:', response)
//         if (response.data instanceof Blob) {
//           // Use the 'file-saver' library to initiate the file download
//           saveAs(response.data, 'FM1000.xlsx')
//         }
//       })
//       .catch((error) => {
//         // Handle API request error
//         console.error('API Request Error:', error)
//       })
//   }

//   return (
//     <CRow>
//       <CCol xs={12}>
//         <CCard className="mb-4">
//           <CCardHeader>
//             <strong>Generate Sesame File</strong> <small>Select format</small>
//           </CCardHeader>
//           <CCardBody>
//             <p className="text-medium-emphasis small">Generate Sesame File in Preferred version</p>
//             <div href="components/buttons">
//               {['Generate'].map((state, index) => (
//                 <CRow className="align-items-center mb-3" key={index}>
//                   <CRow className="align-items-center mb-3">
//                     <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                       Date Range
//                     </CCol>
//                     <CCol>
//                       <DatePicker
//                         selected={startDate}
//                         onChange={(date) => setStartDate(date)}
//                         startDate={startDate}
//                         endDate={endDate}
//                         selectsStart
//                         isClearable
//                         placeholderText="Start Date"
//                       />
//                       <DatePicker
//                         selected={endDate}
//                         onChange={(date) => setEndDate(date)}
//                         startDate={startDate}
//                         endDate={endDate}
//                         selectsEnd
//                         isClearable
//                         placeholderText="End Date"
//                       />
//                     </CCol>
//                   </CRow>
//                   <CRow className="align-items-center mb-3">
//                     <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                       Bank id
//                     </CCol>
//                     <CCol>
//                       <input
//                         type="text"
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                         placeholder="Enter Bank Id"
//                       />
//                     </CCol>
//                   </CRow>
//                   <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                     {state.charAt(0).toUpperCase() + state.slice(1)}
//                   </CCol>
//                   <CCol>
//                     <CButton color="link" onClick={handleApiRequest}>
//                       <CIcon icon={cilDataTransferDown} className="me-2" />
//                       FM1000
//                     </CButton>
//                     <CButton color="link">
//                       <CIcon icon={cilDataTransferDown} className="me-2" />
//                       Bilan Actif
//                     </CButton>
//                     <CButton color="link">
//                       <CIcon icon={cilDataTransferDown} className="me-2" />
//                       Bilan Passif
//                     </CButton>
//                     <CButton color="link">
//                       <CIcon icon={cilDataTransferDown} className="me-2" />
//                       Compte De Resultat Produit
//                     </CButton>
//                     <CButton color="link">
//                       <CIcon icon={cilDataTransferDown} className="me-2" />
//                       Compte De Resultat Charges
//                     </CButton>

//                     <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
//                       <option>Open this select menu</option>
//                       <option value="1">One</option>
//                       <option value="2">Two</option>
//                       <option value="3">Three</option>
//                     </CFormSelect>
//                   </CCol>
//                 </CRow>
//               ))}
//             </div>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default GenerateFile
