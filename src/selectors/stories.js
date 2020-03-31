
import database from '../firebase/firebase';

export const getStories = () => {
   return database.ref(`stories`).once("value").then((snapshot) => {
      return snapshot.val();
   })   
}

// localStorage.getItem(`story${this.props.story.id}_solved`)

export const getSolved = (solvedString) => {
   if (localStorage.getItem(solvedString) != null) {
      return localStorage.getItem(solvedString).then((snapshot) => {
         return snapshot.val();
      }) 
   } else {
      return false;
   }

}