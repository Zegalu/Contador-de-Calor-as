import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CalorieTracker from "./components/CalorieTracker"
import { CalculatorIcon } from "@heroicons/react/24/solid"


function App() {

	const [state, dispatch] = useReducer(activityReducer, initialState)

	useEffect(() => {
		localStorage.setItem('activities', JSON.stringify(state.activities))
	},[state.activities])

	const canRestartApp = () => useMemo(() => state.activities.length , [state.activities])

	return (
		<>
			<header className="bg-lime-600 py-3">
				<div className=" max-w-4xl mx-auto flex justify-between items-center">
					<div className="flex gap-2">
						<CalculatorIcon className=" h-8 w-8 text-white"/>
						<h1 className="text-center text-lg font-bold text-white uppercase">
							Contador de Calorias
						</h1>
					</div>

					<button 
						className="p-2 bg-gray-800 rounded-lg hover:bg-gray-950 text-white text-sm font-bold uppercase cursor-pointer disabled:opacity-10"
						disabled={!canRestartApp()}
						onClick={() => dispatch({type: 'restart-app'})}
					>
						Reiniciar App
					</button>
				</div>
			</header>

			<section className="bg-lime-500 py-10 px-5">
				<div className="max-w-4xl mx-auto">
					<Form
						dispatch={dispatch}
						state={state}
					/>
				</div>
			</section>

			<section className="bg-gray-800 p-8">
				<div className="max-w-4xl mx-auto">
					<CalorieTracker
						activities={state.activities}
					/>
				</div>
			</section>

			<section className="p-10 mx-auto max-w-4xl">
				<ActivityList
					activities={state.activities}
					dispatch={dispatch}
				/>
			</section>
		</>
	) 
}

export default App