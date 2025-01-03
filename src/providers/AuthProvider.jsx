import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize darkMode state from localStorage or default to false
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true"; 
  });

  // Toggle dark mode and update localStorage
  const handleDarkModeToggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  // Create a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).catch(
      (error) => {
        toast.error("Error creating user: " + error.message);
        console.error(error);
      }
    );
  };

  // Sign in an existing user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      toast.error("Error signing in: " + error.message);
      console.error(error);
    });
  };

  // Handle sign-out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null); // Update user state after sign-out
        toast.success("Sign Out successful");
      })
      .catch((error) => {
        toast.error("Error signing out: " + error.message);
      });
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user); // Update the user state
        toast.success("Signed in with Google");
        console.log(user);
      })
      .catch((error) => {
        toast.error("Google Sign-In Failed: " + error.message);
        console.error(error);
      });
  };

  // Observer user login state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    darkMode,
    handleDarkModeToggle,
    createUser,
    signInUser,
    handleSignOut,
    handleGoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
