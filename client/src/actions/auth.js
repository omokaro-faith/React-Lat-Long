import configureStore from '../store/configureStore';
import googleAuthProvider, { firebase } from '../firebase/firebase';
import { toast 
} from "bulma-toast";

const store = configureStore();

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
      return;
    });
  };
};


export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
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

