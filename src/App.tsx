import './App.css'
import PiggyBankOverview from './view/components/piggyBankOverview/PiggyBankOverview'
import MainLayout from './view/mainLayout/MainLayout'

function App() {

	return (
		<>
			Sparschwein
			<MainLayout 
				viewHeadline='Test'  
				content={ <PiggyBankOverview /> }
			/>
		</>
	)
}

export default App
