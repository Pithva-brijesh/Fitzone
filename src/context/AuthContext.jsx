import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Placeholder for Supabase authentication
        // Later we'll replace this with:
        // supabase.auth.getUser()

        const demoUser = {
            id: "1",

            // Profile
            name: "Alex Chen",
            email: "alex@fitzone.com",
            avatar: null,

            // Fitness
            streak: 18,
            level: 8,
            xp: 8420,

            // Body
            age: 25,
            gender: "Male",
            height: 180,
            weight: 75,
            goalWeight: 70,

            // Goals
            goal: "Build Muscle",
            activityLevel: "Intermediate",

            // Nutrition
            dailyCalories: 2400,
            proteinGoal: 150,
            carbGoal: 250,
            fatGoal: 70,
            waterGoal: 3000,

            // Progress
            workoutsCompleted: 126,
            badges: 18,

            joinedAt: "2025-01-15",
        };

        setUser(demoUser);
        setLoading(false);
    }, []);

    const login = async () => {
        // TODO: Supabase login
    };

    const logout = async () => {
        // TODO: Supabase logout
        setUser(null);
    };

    const value = {
        user,
        loading,
        login,
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