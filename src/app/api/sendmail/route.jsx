import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {email  , name ,message , number} = await req.json()
    let transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      auth: {
        user: "ajmalshahan23@gmail.com", // Your email app password
        pass: "omrd xkgi yhed oglo", // Your email
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: "officialzedro@gmail.com",
      subject: `Mail from ${email}`,
      text:` Name: ${name}\nEmail: ${email}\nNumber:${number}\nMessage: ${message}`,
    };
    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
  }
}