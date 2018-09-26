export const clearError = () => ({
  type: 'CLEAR_ERROR',
});

export const validationError = (error) => ({
  type: 'VALIDATION_ERROR',
  payload: error,
  error: true,
});
