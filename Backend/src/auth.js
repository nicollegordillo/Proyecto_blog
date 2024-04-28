import jwt from 'jsonwebtoken';

// Función para generar un token de autenticación
export function generateAuthToken(user) {
  // Obtener la información del usuario que se incluirá en el token
  const { id, username } = user;

  // Definir la información a incluir en el token
  const payload = {
    user: {
      id,
      username,
    },
  };

  // Generar el token con una clave secreta
  const token = jwt.sign(payload, 'secreto', { expiresIn: '1h' }); // Aquí 'secreto' sería tu clave secreta, y '1h' el tiempo de expiración del token

  return token;
}
