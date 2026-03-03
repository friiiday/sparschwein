import './App.css'
import AddButton from './view/components/addButton/AddButton'
import Contribute from './view/components/contribute/Contribute'
import EmptyDisplay from './view/components/emptyDisplay/EmptyDisplay'
import ChoiceButtonsArea from './view/components/ChoiceButtons/ChoiceButtonsArea'
import ParticipantDetails from './view/components/participant/participantDetails/ParticipantDetails'
import ParticipantsList from './view/components/participant/participantsList/ParticipantsList'
import ParticipantsOverview from './view/components/participant/participantsOverview/ParticipantsOverview'
import ParticipantPayHistory from './view/components/payHistory/ParticipantPayHistory'
import PiggyBankPayHistory from './view/components/payHistory/PiggyBankPayHistory'
import PiggyBankDetails from './view/components/piggyBankDetails/PiggyBankDetails'
import PiggyBankOverview from './view/components/piggyBankOverview/PiggyBankOverview'
import MainLayout from './view/components/layouts/mainLayout/MainLayout'

function App() {

	return (
		<>
			Sparschwein
			<MainLayout 
				viewHeadline='Test'  

				// content={ <PiggyBankOverview /> }
				// content={ <PiggyBankList /> }
				// content={ <CreateNewButton /> }
				// content={ <PiggyBankDetails /> }
				// content={ <ParticipantsList /> }
				// content={ <ParticipantDetails /> }
				// content={ <Contribute /> }
				// content={ <EmptyDisplay emptyOption='PIGGYBANKS' /> }
				// content={ <ParticipantPayHistory /> }
				content={ <PiggyBankPayHistory /> }

				choiceButtons={ <ChoiceButtonsArea /> }
			/>
		</>
	)
}

export default App
