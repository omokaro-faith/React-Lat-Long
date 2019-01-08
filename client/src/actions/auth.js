import toastr from 'toastr';
import googleAuthProvider, { firebase } from '../firebase/firebase';

const options = {
  "closeButton": true,
  "debug": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": true,
  "showDuration": "300"
}

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider).then((args) => {
      if(args.operationType === 'signIn') {
        toastr.success(`Welcome ${args.user.displayName}.`, options );
      }
    }).catch((e) => {
      toastr.error(`An error occured. Please try again later.`, options );
    });
  };
};



export const startLogout = () => {
  return () => {
    return firebase.auth().signOut().then(() => {
      toastr.success(`Successfully logged out of Latlang.`, options );
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

