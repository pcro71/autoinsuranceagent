const express = require('express');
const path = require('path');
const { Firestore } = require('@google-cloud/firestore');
const admin = require('firebase-admin');

require('dotenv').config();
const apiRoutes = require('./api/routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Firestore Setup
//const serviceAccount = require('/home/patrick/autoinsuranceagent/src/firebaseserviceaccount.json');
const serviceAccount = JSON.parse(process.env.FIRESTORE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();
const leadDataFirestore = firestore.collection('leadData');

const createDocument = async (leadData) => {
  try {
    leadData.createdAt = admin.firestore.FieldValue.serverTimestamp();
    let record = await leadDataFirestore.add(leadData);
    console.log(record.id);
    return {
        status: 1,
        id: record.id,
    };
  } catch (error) {
    console.log(`Error at createDocument --> ${error}`);
    return {
        status: 0,
        id: ''
    };
  }
};

// This allows Express to handle JSON payloads
app.use(express.json());

// Use the API routes
app.use(apiRoutes);

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, '../build')));

// API Endpoint to Save to Firestore
app.post('/saveToFirestore', async (req, res) => {
  console.log('Attempting to save to Firestore');
  try {
    const leadData = req.body;
    const result = await createDocument(leadData);
    
    if (result.status === 1) {
      res.status(200).json({ message: "Data saved successfully", id: result.id });
    } else {
      res.status(500).json({ message: "Error saving data" });
    }
  } catch (error) {
    console.error('Error while saving to Firestore:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Serve the React app on all other routes
// THIS SHOULD BE THE LAST ROUTE
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
