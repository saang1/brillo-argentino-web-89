
import { createRoot } from 'react-dom/client'
import AppWithPreloader from './components/AppWithPreloader.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<AppWithPreloader />);
