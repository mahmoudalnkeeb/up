CREATE TABLE IF NOT EXISTS comments(
    id SERIAL PRIMARY KEY,
    content VARCHAR(255) NOT NULL ,
    ups INTEGER DEFAULT 0,
    replays INTEGER DEFAULT 0,
    type VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    user_id VARCHAR(16) REFERENCES users(id) ON DELETE SET NULL
);