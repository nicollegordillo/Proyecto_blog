import pool from './conn.js';
import crypto from 'crypto';
// Función para realizar el login de un usuario
export async function login(username, password) {
    try {
        // Realizar la consulta para obtener el usuario por su nombre de usuario
        const query = 'SELECT * FROM users WHERE username = ?';
        const [rows] = await pool.query(query, [username]);

        if (rows.length === 0) {
            return null; // Si el usuario no existe, retorna null
        }

        const user = rows[0];
        const { password_hash, password_salt } = user;

        // Genera el hash de la contraseña proporcionada junto con la sal almacenada
        const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

        // Compara el hash generado con el hash almacenado en la base de datos
        if (hashedPassword === password_hash) {
            return user; // Si los hashes coinciden, retorna los datos del usuario
        } else {
            return null; // Si los hashes no coinciden, retorna null
        }
    } catch (error) {
        console.error('Error al realizar el inicio de sesión:', error);
        throw error;
    }
}

// Función para agregar un nuevo post a la base de datos
export async function addPost(postData) {
  try {
    const query = 'INSERT INTO tamagotchi2_items (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)';
    const result = await pool.query(query, [postData.name, postData.description, postData.price, postData.category, postData.image]);
    return result.insertId; // Retorna el ID del nuevo post insertado
  } catch (error) {
    console.error('Error al agregar el post:', error);
    throw error;
  }
}

// Función para actualizar un post existente en la base de datos
export async function updatePost(postId, postData) {
  try {
    const query = 'UPDATE tamagotchi2_items SET name = ?, description = ?, price = ?, category = ?, image = ? WHERE id = ?';
    const result = await pool.query(query, [postData.name, postData.description, postData.price, postData.category, postData.image, postId]);
    return result.affectedRows > 0; // Retorna true si se actualizó correctamente, false si no se encontró el post
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
}

// Función para borrar un post existente de la base de datos
export async function deletePost(postId) {
  try {
    const query = 'DELETE FROM tamagotchi2_items WHERE id = ?';
    const result = await pool.query(query, [postId]);
    return result.affectedRows > 0; // Retorna true si se eliminó correctamente, false si no se encontró el post
  } catch (error) {
    console.error('Error al borrar el post:', error);
    throw error;
  }
}

// Función para buscar un post por su ID en la base de datos
export async function getPostById(postId) {
  try {
    const query = 'SELECT * FROM tamagotchi2_items WHERE id = ?';
    const [rows] = await pool.query(query, [postId]);
    return rows[0]; // Retorna el primer post encontrado con el ID especificado, o undefined si no se encuentra
  } catch (error) {
    console.error('Error al buscar el post por ID:', error);
    throw error;
  }
}


// Obtener todos los posts
export async function getAllPosts() {
 const [rows] = await pool.query('SELECT * FROM tamagotchi2_items')
 return rows
}
