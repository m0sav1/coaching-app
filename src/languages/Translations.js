import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebase from 'firebase/app'; 
import { useSelector } from 'react-redux';

/**  Translations from firebase **/

const Translations = ({ children }) => {
  const [program1Description, setProgram1Description] = useState('');
  const firestore = getFirestore();
  const language = useSelector((state) => state.language);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const docRef = doc(firestore, 'translations', language === 'Ar' ? 'arabic' : language === 'Sv' ? 'swedish' : 'english');
          const docSnapshot = await getDoc(docRef);
          const data = docSnapshot.data();
          setProgram1Description(data.program1Description);
        } catch (error) {
          console.log('Error fetching data from Firestore:', error);
        }
      };

    fetchData();
  }, [firestore, language]);

  return children(program1Description);
};

export default Translations;
