
-- PostgreSQL Schema

CREATE TABLE task (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  priority VARCHAR(10) NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE task_activities (
  id SERIAL PRIMARY KEY,
  ip_address TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Trigger Function (PostgreSQL)
-- Automatically logs all INSERT, UPDATE, and DELETE actions.

CREATE OR REPLACE FUNCTION log_task_activity()
RETURNS TRIGGER AS $$
DECLARE
  action TEXT;
BEGIN
  IF TG_OP = 'INSERT' THEN
    action := 'Created task: ' || NEW.description;
    INSERT INTO task_activities (description, ip_address)
    VALUES (action, inet_client_addr());
  ELSIF TG_OP = 'UPDATE' THEN
    action := 'Updated task: ' || NEW.description;
    INSERT INTO task_activities (description, ip_address)
    VALUES (action, inet_client_addr());
  ELSIF TG_OP = 'DELETE' THEN
    action := 'Deleted task: ' || OLD.description;
    INSERT INTO task_activities (description, ip_address)
    VALUES (action, inet_client_addr());
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;


-- Trigger setup:
CREATE TRIGGER trg_task_activity
AFTER INSERT OR AFTER UPDATE OR BEFORE DELETE
ON task
FOR EACH ROW
EXECUTE FUNCTION log_task_activity();