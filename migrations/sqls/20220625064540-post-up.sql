CREATE TABLE IF NOT EXISTS posts(
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    ups INTEGER DEFAULT 0, 
    comments INTEGER DEFAULT 0,
    photo VARCHAR(250),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_id VARCHAR(16) REFERENCES users(id) ON DELETE SET NULL
);