import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebase from 'firebase/app'; 

const Arabic = ({ children }) => {
  const [program1Description, setProgram1Description] = useState('');
  const firestore = getFirestore();

  useEffect(() => {
    const fetchData = async () => {
        try {
          const docRef = doc(firestore, 'translations', 'arabic');
          const docSnapshot = await getDoc(docRef);
          const data = docSnapshot.data();
          setProgram1Description(data.program1Description);
        } catch (error) {
          console.log('Error fetching data from Firestore:', error);
        }
      };

    fetchData();
  }, []);

  return children(program1Description);
};

export default Arabic;
