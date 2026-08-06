const verifyAdminCode = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ success: false, message: "Code is required" });
    }

    if (code === process.env.ADMIN_CODE) {
      return res.status(200).json({ success: true });
    }

    return res.status(401).json({ success: false, message: "Invalid code" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error during admin verification",
      error: error.message,
    });
  }
};

module.exports = { verifyAdminCode };