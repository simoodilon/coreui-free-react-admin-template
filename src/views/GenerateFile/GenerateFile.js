import React, { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow, CFormSelect } from '@coreui/react'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDataTransferDown } from '@coreui/icons'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { saveAs } from 'file-saver'
import { apiRequest } from 'src/services/Services'

const GenerateFile = () => {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [selectedOption, setSelectedOption] = useState('1') // Initialize with a default value of '1'

  const apiEndpoints = {
    1: '/GenerateFM1000', // Use relative path, which will be appended to the base URL
    2: '/GenerateBilanActif',
    3: '/GenerateBilanPassif',
    4: '/GenerateCompteDeResultatProduit',
    5: '/GenerateCompteDeResultatCharges',
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

    console.log('Requestdata:', requestData)

    try {
      const response = await apiRequest(selectedEndpoint, 'post', requestData, 'file') // Use the apiRequest function

      console.log('API Response:', response)

      if (response instanceof Blob) {
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
        console.log(fileName)
        saveAs(response, fileName)
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
// import { saveAs } from 'file-saver'
// import * as apiServices from '/Users/simoo/sesamev1/src/services/Services' // Import the services from services.js

// const GenerateFile = () => {
//   const [startDate, setStartDate] = useState('')
//   const [endDate, setEndDate] = useState('')
//   const [inputValue, setInputValue] = useState('')
//   const [selectedOption, setSelectedOption] = useState('1')

//   const dateString = (stringDate) => {
//     const date = new Date(stringDate).toLocaleDateString('en-US')
//     let values = date.split('/')
//     const formattedDate = `${values[1]}/${values[0]}/${values[2]}`
//     return formattedDate
//   }

//   const handleApiRequest = async () => {
//     const requestData = {
//       startDate: dateString(new Date(startDate).toLocaleDateString('en-US')),
//       endDate: dateString(new Date(endDate).toLocaleDateString('en-US')),
//       bankRef: inputValue,
//     }

//     try {
//       let response
//       let fileName

//       // Choose the appropriate API function based on the selected option
//       switch (selectedOption) {
//         case '1':
//           response = await apiServices.generateFM1000(requestData)
//           fileName = 'FM1000.xlsx'
//           break
//         case '2':
//           response = await apiServices.generateBilanActif(requestData)
//           fileName = 'BilanActif.xlsx'
//           break

//         case '3':
//           response = await apiServices.generateBilanPassif(requestData)
//           fileName = 'BilanPassif.xlsx'
//           break

//         case '4':
//           response = await apiServices.GenerateCompteDeResultatProduit(requestData)
//           fileName = 'CompteDeResultatProduit.xlsx'
//           break

//         case '5':
//           response = await apiServices.GenerateCompteDeResultatCharges(requestData)
//           fileName = 'CompteDeResultatCharges.xlsx'
//           break
//         // Add other cases for different options
//         default:
//           console.error('Invalid option selected')
//           return
//       }

//       console.log('API Response:', response)

//       if (response instanceof Blob) {
//         saveAs(response, fileName)
//       }
//     } catch (error) {
//       console.error('API Request Error:', error)
//     }
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
//             <div>
//               <CRow className="align-items-center mb-3">
//                 <CRow className="align-items-center mb-3">
//                   <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                     Date Range
//                   </CCol>
//                   <CCol>
//                     <div className="date-picker-container">
//                       <DatePicker
//                         className="form-control"
//                         selected={startDate}
//                         onChange={(date) => setStartDate(date)}
//                         startDate={startDate}
//                         endDate={endDate}
//                         selectsStart
//                         isClearable
//                         placeholderText="Start Date"
//                         required
//                       />

//                       <DatePicker
//                         className="form-control"
//                         selected={endDate}
//                         onChange={(date) => setEndDate(date)}
//                         startDate={startDate}
//                         endDate={endDate}
//                         selectsEnd
//                         isClearable
//                         placeholderText="End Date"
//                         required
//                       />
//                     </div>
//                   </CCol>
//                 </CRow>
//                 <CRow className="align-items-center mb-3">
//                   <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                     Bank id
//                   </CCol>
//                   <CCol>
//                     <input
//                       className="form-control"
//                       type="text"
//                       value={inputValue}
//                       onChange={(e) => setInputValue(e.target.value)}
//                       placeholder="Enter Bank Id"
//                     />
//                   </CCol>
//                 </CRow>
//                 <CRow>
//                   <CCol xs={12} xl={2} className="mb-3 mb-xl-0">
//                     Download Format
//                   </CCol>
//                   <CCol>
//                     <CFormSelect
//                       size="sm"
//                       className="mb-3"
//                       aria-label="Small select example"
//                       value={selectedOption}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                     >
//                       <option value="1">FM1000</option>
//                       <option value="2">Bilan Actif</option>
//                       <option value="3">Bilan Passif</option>
//                       <option value="4">Compte De Resultat Produit</option>
//                       <option value="5">Compte De Resultat Charges</option>
//                     </CFormSelect>
//                   </CCol>
//                 </CRow>
//               </CRow>
//               <CButton color="primary" onClick={handleApiRequest}>
//                 <CIcon icon={cilDataTransferDown} className="me-2" />
//                 Generate
//               </CButton>
//             </div>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default GenerateFile
