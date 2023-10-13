import React from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from './AuthContext'

function ProtectedRoute({ children }) {
  const { user } = useAuth() // Assuming useAuth provides user information

  console.log('route:', user)

  // Check if the user is authenticated, or you can perform other authentication checks
  if (user) {
    return children // Render the protected route if authenticated
  } else {
    return <Navigate to="/login" /> // Redirect to the login page if not authenticated
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProtectedRoute
