import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate('/error');
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate('/browse');
        // ...
      } else {
        dispatch(removeUser);
        navigate('/');
        // User is signed out
        // ...
      }
    });

    // Unsubscribe when component unMounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute px-8 w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          <img
            className="w-8 h-8 mr-2"
            alt="user-icon"
            src="https://occ-0-3217-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfH5t3eAYYhXjoflymf0kk_47qubQ_moYp6d6P8iD_muqYgDygNMZw7owkEL8onkGo8EyhK0vhjiLh84soo5bae8By6X0go.png?r=31a"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
