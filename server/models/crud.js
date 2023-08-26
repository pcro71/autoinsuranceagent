const { Firestore} = require('@google-cloud/firestore');
const admin = require('firebase-admin');

const serviceAccount = require('/home/patrick/autoinsuranceagent/src/firebaseserviceaccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Access Firestore using the initialized Firebase Admin SDK
const firestore = admin.firestore();

const chatData = firestore.collection('AutoInsuranceAgent_LeadData');

const createDocument = async (leadData) => {

    try {
        leadData.createdAt = admin.firestore.FieldValue.serverTimestamp();
        let record = await chatData.add(leadData);
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
const getDocument = async (firebaseId) => {

    try {
        let docRef = AutoInsuranceAgent_LeadData.doc(firebaseId)
        let querySnapshot = await docRef.get();
        if (!querySnapshot.exists) {
            return {
                status: "No doc with such Firestore ID",
                doc: [],
            };
        } else {
            let doc = await querySnapshot.data();
            return {
                status: "got the data",
                doc: doc,
            };
        }
    } catch (error) {
        console.log(`Error at getDocuments --> ${error}`);
        return {
            status: 0,
            doc: []
        };
    }
};

const getDocuments = async () => {

    try {
        let querySnapshot = await AutoInsuranceAgent_LeadData.get();
        if (querySnapshot.empty) {
            return {
                status: -1,
                docs: []
            };
        } else {
            let docs = []
            querySnapshot.forEach(QueryDocumentSnapshot => {
                let tempData = QueryDocumentSnapshot.data();
                tempData['id'] = QueryDocumentSnapshot.id;
                docs.push(tempData);
            });
            return {
                status: 1,
                docs: docs
            };
        }
    } catch (error) {
        console.log(`Error at getDocuments --> ${error}`);
        return {
            status: 0,
            docs: []
        };
    }
};

// getDocuments()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const getDocumentsWithWhere = async (key, value, condition) => {

    try {
        let querySnapshot = await chatData
            .where(key, condition, value)
            .get();
        if (querySnapshot.empty) {
            return {
                status: -1,
                docs: []
            };
        } else {
            let docs = []
            querySnapshot.forEach(QueryDocumentSnapshot => {
                let tempData = QueryDocumentSnapshot.data();
                tempData['id'] = QueryDocumentSnapshot.id;
                docs.push(tempData);
            });
            return {
                status: 1,
                docs: docs
            };
        }
    } catch (error) {
        console.log(`Error at getDocuments --> ${error}`);
        return {
            status: 0,
            docs: []
        };
    }
};