CREATE TABLE IF NOT EXISTS reports(
    id SERIAL PRIMARY KEY ,
    title VARCHAR(100),
    report_content TEXT
);