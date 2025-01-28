import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {create} from 'zustand';
import auth, {firebase} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface AuthStore {
  user: FirebaseAuthTypes.User | null;
  isAuthenticated: boolean;
  token: string | null;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setToken: (token: string | null) => void;
  loginWithGoogle: () => Promise<void>;
  loginWithApple: () => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthStore>(set => ({
  user: null,
  isAuthenticated: false,
  token: null,
  setUser: user => set({user}),
  setIsAuthenticated: isAuthenticated => set({isAuthenticated}),
  setToken: token => set({token}),
  loginWithGoogle: async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const signInResult = await GoogleSignin.signIn();

      const idToken = signInResult.data?.idToken;
      if (!idToken) throw new Error('No ID token found');

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await firebase
        .auth()
        .signInWithCredential(googleCredential);
      const token = await userCredential.user.getIdToken();

      set({
        user: userCredential.user,
        isAuthenticated: true,
        token,
      });
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  },
  loginWithApple: async () => {
    // Implementar login com Apple
    console.log('Login with Apple');
  },
  logout: async () => {
    try {
      await firebase.auth().signOut();
      set({
        user: null,
        isAuthenticated: false,
        token: null,
      });
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },
}));
