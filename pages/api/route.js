const handler = (req, res) => {
  res.status(200).json({ text: 'Hello there!' });
}

export default handler;