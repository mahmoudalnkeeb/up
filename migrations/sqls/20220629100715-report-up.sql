CREATE TABLE IF NOT EXISTS reports(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(100),
    report_content TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    reported_id VARCHAR(20),
    reported_type VARCHAR(20),
    user_id VARCHAR(16) REFERENCES users(id) ON DELETE SET NULL
);