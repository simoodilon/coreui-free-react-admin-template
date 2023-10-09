import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableHead,
  CTableRow,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Cashier = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editedEmail, setEditedEmail] = useState('')
  const [editedName, setEditedName] = useState('')

  // Add state for the "Add Cashier" modal
  const [showAddCashierModal, setShowAddCashierModal] = useState(false)

  const handleEmailInputChange = (e) => {
    setEditedEmail(e.target.value)
  }

  const handleNameInputChange = (e) => {
    setEditedName(e.target.value)
  }

  const handleDeleteClick = () => {
    setShowDeleteModal(true)
  }

  const handleEditClick = () => {
    setShowEditModal(true)
  }

  const handleConfirmDelete = () => {
    // Handle the deletion logic here
    setShowDeleteModal(false)
  }

  const handleConfirmEdit = (updatedData) => {
    // Handle the edit logic here with the updated data in `updatedData`
    // You can perform an API call to save the updated data to the server, for example.
    // For now, we'll just log it.
    console.log(updatedData)
    setShowEditModal(true)
  }

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false)
  }

  const handleCloseEditModal = () => {
    setShowEditModal(false)
  }

  // Functions for "Add Cashier" modal
  const showAddCashier = () => {
    setShowAddCashierModal(true)
  }

  const hideAddCashier = () => {
    setShowAddCashierModal(false)
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong>Cashiers</strong>
              {/* Add Cashier Button */}
              <CButton color="success" onClick={showAddCashier}>
                Add Cashier
              </CButton>
            </div>{' '}
          </CCardHeader>
          <CCardBody>
            <CTable>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell scope="col">#</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cashier</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Town</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableHeaderCell scope="row">1</CTableHeaderCell>
                  <CTableHeaderCell>Mark</CTableHeaderCell>
                  <CTableHeaderCell>Otto</CTableHeaderCell>
                  <CTableHeaderCell>@mdo</CTableHeaderCell>
                  <CTableHeaderCell>
                    <CButton color="primary" onClick={handleEditClick}>
                      Edit
                    </CButton>
                    <CButton
                      color="danger"
                      onClick={handleDeleteClick}
                      style={{ marginLeft: '5px' }}
                    >
                      Delete
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
                {/* ... (other rows) ... */}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Delete Modal */}

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Replace with your form fields for editing */}
          <div className="mb-3">
            <label htmlFor="editName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="editName"
              name="name"
              // Use appropriate value from your data for editing
              value={editedName}
              onChange={handleNameInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="editEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="editEmail"
              name="email"
              // Use appropriate value from your data for email
              value={editedEmail}
              onChange={handleEmailInputChange}
            />
          </div>
          {/* Add more form fields as needed */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirmEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Cashier Modal */}
      <div className="modal-dialog modal-lg">
        <Modal show={showAddCashierModal} onHide={hideAddCashier}>
          <Modal.Header closeButton>
            <Modal.Title>Add Cashier</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CForm className="row g-3 needs-validation" noValidate>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
                <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                <CFormFeedback valid>Looks good!</CFormFeedback>
              </CCol>
              <CCol md={4}>
                <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
                <CInputGroup className="has-validation">
                  <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
                  <CFormInput
                    type="text"
                    id="validationCustomUsername"
                    defaultValue=""
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <CFormFeedback invalid>Please choose a username.</CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md={6}>
                <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
                <CFormInput type="text" id="validationCustom03" required />
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
                <CFormSelect id="validationCustom04">
                  <option disabled>Choose...</option>
                  <option>...</option>
                </CFormSelect>
                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
              </CCol>
              <CCol md={3}>
                <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
                <CFormInput type="text" id="validationCustom05" required />
                <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
              </CCol>
              <CCol xs={12}>
                <CFormCheck type="checkbox" id="invalidCheck" label="Activate" />
                <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
              </CCol>
            </CForm>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hideAddCashier}>
              Cancel
            </Button>
            <Button variant="primary">Add Cashier</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </CRow>
  )
}

export default Cashier
