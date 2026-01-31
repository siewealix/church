export const submitContact = async (req, res) => {
  return res.status(200).json({
    message: 'Message reçu. Nous vous contacterons bientôt.',
    data: req.body
  });
};
