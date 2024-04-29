export const checkTokenValidity = async () => {
  let token = localStorage.getItem('token');

  // Verificar si el token existe
  if (!token) {
    return false; // No hay token almacenado, devuelve false
  } else {
    try {
      // Si hay un token almacenado, llamar a la ruta '/admin' con el token en el encabezado 'Authorization'
      const response = await fetch('https://api.tiburoncin.lat/32246/admin', {
        method: 'POST', // Cambia el método a POST
        headers: {
          'Content-Type': 'application/json' // Indica que el cuerpo de la solicitud es JSON
        },
        body: JSON.stringify({ token }) // Envía el token en el cuerpo de la solicitud
      });

      if (response.ok) {
        return true; // El token es válido, devuelve true
      } else {
        return false; // El token es inválido o ha expirado, devuelve false
      }
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return false; // Maneja el error de acuerdo a tu lógica, devuelve false
    }
  }
};
