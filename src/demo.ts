const apiKey = "sk-live-abcdef1234567890";

export function getUser(id: string) {
  const sql = "SELECT * FROM users WHERE id = " + id;
  return db.query(sql);
}
