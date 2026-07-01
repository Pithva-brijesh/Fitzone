import { createContext, useContext, useEffect, useState } from "react";

import {
    signIn as signInService,
    signOut as signOutService,
    signUp as signUpService,
    getCurrentUser,
} from "../services/authService";

const AuthContext = createContext(null);

// ===============================
// DEVELOPMENT USER
// Remove this before production
// ===============================
const demoUser = {
    id: "dev-user",
    name: "Alex",
    email: "alex@fitzone.com",
    avatar: null,

    streak: 18,
    level: 8,
    xp: 8420,

    age: 25,
    gender: "Male",

    height: 180,
    weight: 75,
    goalWeight: 70,

    goal: "Build Muscle",
    activityLevel: "Intermediate",

    dailyCalories: 2400,
    proteinGoal: 150,
    carbGoal: 250,
    fatGoal: 70,
    waterGoal: 3000,

    workoutsCompleted: 126,
    badges: 18,

    joinedAt: "2025-01-15",
};

// Turn this OFF later
const DEV_MODE = false;

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function restoreUser() {
            try {
                const currentUser = await getCurrentUser();

                if (currentUser) {
                    setUser(currentUser);
                } else if (DEV_MODE) {
                    setUser(demoUser);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error(error);

                if (DEV_MODE) {
                    setUser(demoUser);
                }
            } finally {
                setLoading(false);
            }
        }

        restoreUser();
    }, []);

    async function login(email, password) {
        const data = await signInService(email, password);
        setUser(data.user);
        return data.user;
    }

    async function register(fullName, email, password) {
        const data = await signUpService(fullName, email, password);
        setUser(data.user);
        return data.user;
    }

    async function logout() {
        await signOutService();

        if (DEV_MODE) {
            setUser(demoUser);
        } else {
            setUser(null);
        }
    }

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        setUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;

export function useAuthContext() {
    return useContext(AuthContext);
}