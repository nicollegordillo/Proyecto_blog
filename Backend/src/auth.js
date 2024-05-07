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

// Función para verificar la validez del token de autenticación
export async function verifyAuthToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, 'secreto', (err, decoded) => {
      if (err) {
        reject(err); // Reject the promise if there's an error
      } else {
        resolve(decoded.user); // Resolve the promise with the decoded user data if the token is valid
      }
    });
  });
}
