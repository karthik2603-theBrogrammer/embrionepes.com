export default async function getTime(req, res) {
  res.status(200).json({
    currentTime: Date.now(),
    // Registerations Go Live Date 20th October set as of now.
    registerationsBeginDate: new Date("2023-10-20").getTime(),
  });
}
