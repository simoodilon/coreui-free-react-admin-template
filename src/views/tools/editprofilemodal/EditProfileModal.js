import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const EditModal = ({ onClose }) => {
  const [editedEmail, setEditedEmail] = useState('')
  const [editedName, setEditedName] = useState('')

  const handleNameInputChange = (e) => {
    setEditedName(e.target.value)
  }

  const handleEmailInputChange = (e) => {
    setEditedEmail(e.target.value)
  }

  const handleConfirmEdit = () => {
    // Handle the edit logic here with the updated data
    // For now, we'll just log it.
    console.log(`Name: ${editedName}, Email: ${editedEmail}`)
    onClose() // Close the modal
  }

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label htmlFor="editName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="editName"
            name="name"
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
            value={editedEmail}
            onChange={handleEmailInputChange}
          />
        </div>
        {/* Add more form fields as needed */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleConfirmEdit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
EditModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default EditModal
