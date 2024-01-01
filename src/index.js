import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const contextValues = { basename: 'your value' };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => useContext(StoreContext);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

// Now, export the components
export default {StoreContextProvider, useStoreContext };
