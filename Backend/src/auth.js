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
  try {
    // Verificar el token utilizando la biblioteca JWT
    const user = await new Promise((resolve, reject) => {
      jwt.verify(token, 'secreto', (err, decoded) => {
        if (err) {
          reject(err); // Si hay un error, rechaza la promesa
        } else {
          resolve(decoded.user); // Si el token es válido, resuelve la promesa con los datos decodificados del usuario
        }
      });
    });

    return user; // Devuelve los datos decodificados del usuario
  } catch (error) {
    throw error; // Si ocurre un error durante la verificación del token, lanza una excepción
  }
}
