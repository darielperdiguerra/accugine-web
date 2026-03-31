const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const nodemailer = require('nodemailer'); // Moved to the top
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Connect to Docker PostgreSQL
const pool = new Pool({
  user: 'admin',
  host: 'db',
  database: 'accugine_quotes',
  password: 'accugine_password',
  port: 5432,
});

// 2. Configure Nodemailer (Use your App Password here)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'darielperdiguerra@gmail.com',
    pass: 'exwf xrkp umms ncrl' // Your App Password
  }
});

// 3. Combined API Route (Database + Email)
app.post('/api/quote', async (req, res) => {
  const { user_name, user_email, product, message } = req.body;

  try {
    // A. Save to Database
    const dbResult = await pool.query(
      'INSERT INTO quotes (customer_name, customer_email, product_type, project_details) VALUES ($1, $2, $3, $4) RETURNING *',
      [user_name, user_email, product || 'General Inquiry', message]
    );

    // B. Send Email Notification
    const mailOptions = {
      from: 'darielperdiguerra@gmail.com', // Must match the 'user' above
      to: 'darielperdiguerra@gmail.com',   // Fixed the double @gmail
      subject: `New Lead: ${product || 'General'} for ${user_name}`,
      text: `You have a new quote request!\n\nName: ${user_name}\nEmail: ${user_email}\nProduct: ${product}\nDetails: ${message}`
    };

    // We use await or a callback to catch email errors
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("❌ Email Error:", error);
      } else {
        console.log("✅ Email Sent: " + info.response);
      }
    });

    // C. Final Success Response to React
    res.status(200).json({ 
      success: true, 
      message: 'Quote saved and email notification triggered!',
      data: dbResult.rows[0] 
    });

  } catch (err) {
    console.error("❌ System Error:", err);
    res.status(500).json({ success: false, error: "Database or System Error" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));