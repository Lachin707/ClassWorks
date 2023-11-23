import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Row from './components/Row';
import Col from './components/Col';

function App() {
	const [paymentState, setPaymentState] = useState(1);
	const [price, setPrice] = useState(8);
	const [maxTickets, setMaxTickets] = useState(10);
	const [ticketsCount, setTicketsCount] = useState(0);
	const [ticketsCost, setTicketsCost] = useState(0);
	const [usedPlace, setUsedPlace] = useState([]);


	useEffect(() => {
		let array = [];
		for (let index = 0; index < 60; index++) {
			array = [...array, false]
		}
		setUsedPlace(array)
	}, [])


	function handleChange(e) {
		setTicketsCount(e.target.value);

	}

	useEffect(() => {
		setTicketsCost(ticketsCount * price);
	}, [handleChange])


	function handlePrevStage(e) {
		setPaymentState(paymentState - 1);
	}

	function handleNextStage(e) {
		if (ticketsCost != 0) {
			setPaymentState(paymentState + 1);
		}
	}

	function handlePlaceClick(e) {
		let array = [...usedPlace];
		if (usedPlace[e.target.textContent - 1]) array[e.target.textContent - 1] = false;
		else array[e.target.textContent - 1] = true;
		setUsedPlace(array);
	}

	return (
		<>
			<div className="paymentCard">
				<div className="states-box">
					<div className={paymentState == 1 ? "activeState" : "unActiveState"}>
						<h1 className="statesText">1</h1>
						<p>Seans</p>
					</div>
					<div className={paymentState == 2 ? "activeState" : "unActiveState"}>
						<h1 className="statesText">2</h1>
						<p>Yerlər</p>
					</div>
					<div className={paymentState == 3 ? "activeState" : "unActiveState"}>
						<h1 className="statesText">3</h1>
						<p>Ödəniş</p>
					</div>
				</div>
				{paymentState == 1 ? <div className="ticked-box">
					<Select
						value={ticketsCount}
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
					>
						{
							[...Array(maxTickets + 1)].map((item, index) => (
								<MenuItem key={index} value={index}>{index}</MenuItem>
							))
						}
					</Select>
				</div> : null}
				{paymentState == 2 ? <div className="place-selection">
					<div className="cont">
						<Row>
							{
								usedPlace.map((item, index) => (
									<Col key={index} size={1}>
										<div className={`place-circle ${item ? "red" : ""}`} onClick={handlePlaceClick}>
											{index + 1}
										</div>
									</Col>
								))
							}
						</Row>
					</div>
				</div> : null}
				<div className="money-box">
					{paymentState > 1 ? <Button variant="outlined" onClick={handlePrevStage}>Geri</Button> : null}
					<div className="ticketsCost">
						<h1>{ticketsCost}</h1>
					</div>
					<Button variant="outlined" onClick={handleNextStage}>Irəli</Button>
				</div>
			</div>
		</>
	);
}

export default App;
