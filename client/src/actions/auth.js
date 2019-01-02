import googleAuthProvider, { firebase } from '../firebase/firebase';
import { toast 
} from "bulma-toast";
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((args) => {
      if(args.operationType === 'signIn') {
        toast({
          message: `Welcome ${args.user.displayName}`,
          type: "is-info",
          dismissible: true,
          duration: 7000,
          position: "top-right",
        });
      }
    }).catch((e) => {
      toast({
        message: 'An error occured. Please try again',
        type: "is-danger",
        dismissible: true,
        duration: 7000,
        position: "top-right",
      });
    });
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
      toast({
        message: `Successfully logged out from LatLang`,
        type: "is-info",
        dismissible: true,
        duration: 3000,
        position: "top-right",
      });
    }).catch((e) => {
      toast({
        message: `An error occured. Please try again`,
        type: "is-danger",
        dismissible: true,
        duration: 3000,
        position: "top-right",
      });
    });
  };
};

export const Login = ({ uid, displayName, photoURL}) => ({
  type: 'LOGIN',
  uid,
  displayName,
  photoURL
});

export const Logout = () => ({
  type: 'LOGOUT'
});
