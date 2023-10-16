export default async function getTime(req, res) {
  const date = new Date("2023-10-16T21:00:00");
  res.status(200).json({
    currentTime: Date.now(),
    registrationsBeginDate: date.getTime(),
    timeLeft: 1697470200000
  });
}

