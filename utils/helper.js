
export function returnResponse(isSuccess, message) {
  return {
    success: isSuccess,
    message: message
  };
}

export function formatDate(date = new Date()) {
  return date.toISOString().slice(0, 19).replace('T', ' ');
}
