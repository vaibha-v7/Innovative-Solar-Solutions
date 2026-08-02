const Customer = require("../models/customer");

const createCustomer = async (req, res) => {
  try {
    const { fullName, email, phone, address, pincode } = req.body;

    // Basic validation
    if (!fullName || !email || !phone || !address || !pincode) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields.",
      });
    }

    // Save customer
    const customer = await Customer.create({
      fullName,
      email,
      phone,
      address,
      pincode,
    });

    res.status(201).json({
      success: true,
      message: "Customer details saved successfully.",
      data: customer,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: customers.length,
      data: customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch customers",
      error: error.message,
    });
  }
};

module.exports = {
  createCustomer,
  getAllCustomers,
};