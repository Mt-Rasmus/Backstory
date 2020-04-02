
import database from '../firebase/firebase';

export const getStories = () => {
   return database.ref(`stories`).once("value").then((snapshot) => {
      return snapshot.val();
   })   
}
