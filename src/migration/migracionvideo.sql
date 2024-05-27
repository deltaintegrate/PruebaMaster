-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

-- Insertar algunos usuarios de ejemplo
INSERT INTO usuarios (nombre_usuario, correo_electronico, contrasena)
VALUES 
    ('usuario1', 'leo@example.com', '123456'),
    ('usuario2', 'leo2@example.com', '123456'),
    ('usuario3', 'leo3@example.com', '123456');

-- Crear la tabla de autores
CREATE TABLE IF NOT EXISTS autores (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    pais VARCHAR(100) NOT NULL
);

-- Insertar algunos autores de ejemplo
INSERT INTO autores (nombre, correo_electronico, pais)
VALUES 
    ('leoAutor1', 'LeoLEo@example.com', 'Colombia'),
    ('LeoAutor2', 'LeoLeo@example.com', 'Alemania');

-- Crear la tabla de videos
CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    url VARCHAR(255) NOT NULL,
    autor_id INTEGER REFERENCES autores(id)
);

-- Insertar algunos videos de ejemplo
INSERT INTO videos (titulo, descripcion, url, autor_id)
VALUES 
    ('Video1', 'Descripción del Video 1', 'https://www.youtube.com/watch?v=video1', 1),
    ('Video2', 'Descripción del Video 2', 'https://www.youtube.com/watch?v=video2', 1),
    ('Video3', 'Descripción del Video 3', 'https://www.youtube.com/watch?v=video3', 2),
    ('Video4', 'Descripción del Video 4', 'https://www.youtube.com/watch?v=video4', 2),
    ('Video5', 'Descripción del Video 5', 'https://www.youtube.com/watch?v=video5', 2);

-- Crear la tabla de reviews
CREATE TABLE IF NOT EXISTS reviews (
    id SERIAL PRIMARY KEY,
    puntuacion INTEGER NOT NULL,
    contenido TEXT NOT NULL,
    usuario_id INTEGER REFERENCES usuarios(id),
    video_id INTEGER REFERENCES videos(id)
);

-- Insertar una review de ejemplo
INSERT INTO reviews (puntuacion, contenido, usuario_id, video_id)
VALUES 
    (4, 'Excelente pelicula película', 1, 1);
