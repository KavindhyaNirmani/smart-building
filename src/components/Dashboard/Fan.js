import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const Fan = () => {
  const [fans, setFans] = useState([]);
  const [fan1Color, setFan1Color] = useState('white');
  const [fan2Color, setFan2Color] = useState('white');

  useEffect(() => {
    const fansRef = firebase.database().ref('fans');
    fansRef.on('value', (snapshot) => {
      const fansData = snapshot.val();
      if (fansData) {
        const fansArray = Object.values(fansData);
        const mappedFans = fansArray.map((fan, index) => ({
          id: index + 1,
          status: fan.status,
        }));
        setFans(mappedFans);
      }
    });

    return () => fansRef.off();
  }, []);

  const toggleFan = (id) => {
    const fanIndex = fans.findIndex((fan) => fan.id === id);
    if (fanIndex !== -1) {
      const fanRef = firebase.database().ref(`fans/${id - 1}`);
      const updatedStatus = !fans[fanIndex].status;
      fanRef.update({ status: updatedStatus });

      if (id === 1) {
        setFan1Color(updatedStatus ? 'green' : 'red');
      } else if (id === 2) {
        setFan2Color(updatedStatus ? 'green' : 'red');
      }
    }
  };

  return { fans, toggleFan, fan1Color, fan2Color };
};

export default Fan;
