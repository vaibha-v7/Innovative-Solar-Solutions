import emailjs from "@emailjs/browser";

export const sendOwnerEmail = async (customerData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      name: customerData.fullName,
      email: customerData.email,
      phone: customerData.phone,
      address: customerData.address,
      pincode: customerData.pincode,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
};