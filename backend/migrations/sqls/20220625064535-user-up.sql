CREATE TABLE IF NOT EXISTS users(
    id VARCHAR(16) PRIMARY KEY ,
    fname VARCHAR(150) NOT NULL,
    lname VARCHAR(150) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(25) , 
    dob VARCHAR(50) NOT NULL,
    gender VARCHAR(6) NOT NULL,
    country VARCHAR(60) NOT NULL,
    profile_pic VARCHAR(250) ,
    bio VARCHAR(200),
    verified BOOLEAN NOT NULL DEFAULT FALSE,
    banned BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    following VARCHAR(16)[],
    followers VARCHAR(16)[]
     );