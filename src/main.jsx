import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './components/App/App';
import { TodosProvider } from './contexts/TodosContexts';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<TodosProvider>
			<App />
		</TodosProvider>
	</StrictMode>,
);
