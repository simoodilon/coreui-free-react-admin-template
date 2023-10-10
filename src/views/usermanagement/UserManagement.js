import React, { useState } from 'react'
import {
  CCard,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CProgress,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcMastercard,
  cibCcVisa,
  cifBr,
  cifUs,
  cilPeople,
  cilPencil,
  cilTrash,
} from '@coreui/icons'
import { CAvatar } from '@coreui/react'

import DeleteModal from '../tools/deletemodal/DeleteModal'
import EditModal from '../tools/editprofilemodal/EditProfileModal'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'

const UserManagement = () => {
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const handleEditClick = () => {
    setShowEditModal(true)
  }
  const handleDeleteClick = () => {
    // Set the selected user or perform any other necessary actions
    setSelectedUser(/* Add logic to select the user */)

    // Show the delete modal
    setDeleteModalShow(true)
  }

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Jun 11, 2021 - Jul 10, 2021',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    // ... (other data)
  ]

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>View Users</strong>
          </CCardHeader>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>User</CTableHeaderCell>
                <CTableHeaderCell className="text-center">User Role</CTableHeaderCell>
                <CTableHeaderCell>Usage</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Actions</CTableHeaderCell>
                <CTableHeaderCell>Activity</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                    <div className="small text-medium-emphasis">
                      <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                      {item.user.registered}
                    </div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="clearfix">
                      <div className="float-start">
                        <strong>{item.usage.value}%</strong>
                      </div>
                      <div className="float-end">
                        <small className="text-medium-emphasis">{item.usage.period}</small>
                      </div>
                    </div>
                    <CProgress thin color={item.usage.color} value={item.usage.value} />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <button className="btn btn-outline-primary me-2" onClick={handleEditClick}>
                      <CIcon size="sm" icon={cilPencil} />
                    </button>
                    <button className="btn btn-outline-danger" onClick={handleDeleteClick}>
                      <CIcon size="sm" icon={cilTrash} />
                    </button>
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="small text-medium-emphasis">Last login</div>
                    <strong>{item.activity}</strong>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCard>
        {/* Edit Modal */}
        {showEditModal && <EditModal onClose={() => setShowEditModal(false)} />}
        {/* Delete Modal */}
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

export default UserManagement
