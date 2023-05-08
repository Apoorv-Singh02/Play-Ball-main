import { useState, useEffect } from 'react'
import { db } from './firebase'
import { collection, addDoc, getDocs, doc, query, where, updateDoc, arrayUnion } from "firebase/firestore";
import './App.css'
import { useSelector } from 'react-redux';


function App() {

  const [data, setData] = useState([])
  const userEmail = useSelector((state) => state.user.userEmail )

  async function getdata() {
    const fetched = []
    const querySnapshot = await getDocs(collection(db, "matches"));
    querySnapshot.forEach((doc) => {

      fetched.push([doc.id, doc.data()])

    })
    setData(fetched);
    console.log(data)
  };

  useEffect(() => {
    getdata()
  }, [])

  const handleTeam1 = (match) => {
    console.log(match)
    console.log(match[0])
    const docRef = doc(db, 'matches', match[0])

    updateDoc(docRef, {
      "team1.members": arrayUnion(userEmail)
    });
  }

  const handleTeam2 = (match) => {
    console.log(match)
    console.log(match[0])
    const docRef2 = doc(db, 'matches', match[0])

    console.log(userEmail)
    updateDoc(docRef2, {
      "team2.members": arrayUnion(userEmail)
    });
  }

  return (
    <div>{data.map((match) => (
      <span>
        <h5>{match[1].name}</h5>
        <h5>{match[1].venue}</h5>
        <button onClick={() => { handleTeam1(match) }}>Click to bet on {match[1].team1.name}</button>
        <button onClick={() => { handleTeam2(match) }}>Click to bet on {match[1].team2.name}</button>
      </span>
    ))}</div>
  )
}

export default App
