export default async function getTime(req, res) {
  const date = new Date("2023-10-16T21:00:00");
  const isoDate = date.toISOString();
  res.status(200).json({
    currentTime: new Date().toISOString(),
    registrationsBeginDate: isoDate,
  });
}
