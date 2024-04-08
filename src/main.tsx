import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from "./store/store";
import { PersistGate } from 'redux-persist/integration/react';
import { Suspense } from 'react';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Suspense fallback="Loading...">
      <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </Suspense>
  );
} else {
  throw new Error("Root element with ID 'root' not found in the document.");
}
