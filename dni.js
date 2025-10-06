export default async function handler(req, res) {
  const { dni } = req.query;
  const token = "TU_TOKEN_APISPERU"; // <-- reemplaza esto con tu token real

  if (!dni) {
    return res.status(400).json({ error: "Falta el parámetro DNI" });
  }

  try {
    const apiUrl = `https://api.apisperu.com/api/dni/${dni}?token=${token}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Permitir CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error al consultar el DNI" });
  }
}