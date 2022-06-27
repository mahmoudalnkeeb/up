
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY ,
    name VARCHAR(150) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(25) , 
    dob VARCHAR(50) NOT NULL,
    profile_pic VARCHAR(250) ,
    bio TEXT,
    verified BOOLEAN NOT NULL
     );