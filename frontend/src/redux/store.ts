import { configureStore } from '@reduxjs/toolkit';


const appStore = configureStore({
    reducer: {
         //pokemon: PokemonReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof appStore.getState>;

export default appStore;
