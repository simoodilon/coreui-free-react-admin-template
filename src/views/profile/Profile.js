import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
} from '@coreui/react'
import DeleteModal from '../tools/deletemodal/DeleteModal'

const Profile = () => {
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleDeleteClick = () => {
    // Set the selected user or perform any other necessary actions
    setSelectedUser(/* Add logic to select the user */)

    // Show the delete modal
    setDeleteModalShow(true)
  }
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> User Profile</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">Edit your Profile</p>

            <CForm className="row g-3">
              <CCol md={6}>
                <CFormLabel htmlFor="name">Name</CFormLabel>
                <CFormInput type="email" id="name" />
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="inputPassword4">Password</CFormLabel>
                <CFormInput type="password" id="inputPassword4" />
              </CCol>
              <CCol xs={12}>
                <CFormLabel htmlFor="inputemail">Email</CFormLabel>
                <CFormInput id="email" placeholder="xxxx@gmail.com" />
              </CCol>

              <CCol md={6}>
                <CFormLabel htmlFor="inputCity">City</CFormLabel>
                <CFormInput id="inputCity" />
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="inputState">State</CFormLabel>
                <CFormSelect id="inputState">
                  <option>Choose...</option>
                  <option>...</option>
                </CFormSelect>
              </CCol>
              <CCol md={2}>
                <CFormLabel htmlFor="inputZip">Zip</CFormLabel>
                <CFormInput id="inputZip" />
              </CCol>
              <CCol xs={12}>
                <CFormCheck type="checkbox" id="gridCheck" label="Check me out" />
              </CCol>

              <CCol md={2}>
                <CButton type="submit">Modify Changes</CButton>
              </CCol>
              <CCol md={2}>
                <CButton color="danger" onClick={handleDeleteClick}>
                  Delete Profile
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
        {deleteModalShow && (
          <DeleteModal
            onClose={() => setDeleteModalShow(false)}
            onDelete={() => {
              // Handle delete action here
              setDeleteModalShow(false)
            }}
          />
        )}
      </CCol>
    </CRow>
  )
}

export default Profile
