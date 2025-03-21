import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Utilise le stockage local (localStorage)
import { persistReducer, persistStore } from "redux-persist";
import employeeReducer from "./slices/employeeSlice";

// Configuration de redux-persist
const persistConfig = {
  key: "root",
  storage,
};

// Création d'un reducer persistant
const persistedReducer = persistReducer(persistConfig, employeeReducer);

// Configuration du store Redux avec désactivation de la vérification
const store = configureStore({
  reducer: {
    employees: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Désactive la vérification des valeurs non sérialisables
    }),
});

// Création du persistor
export const persistor = persistStore(store);

export default store;
