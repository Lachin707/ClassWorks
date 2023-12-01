import { FormControl, InputLabel, MenuItem, Select, Card, TextField, Checkbox, FormControlLabel, Button, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";

const registerSchema = Yup.object().shape({
	fname: Yup.string().min(3).max(100).required(),
	lname: Yup.string().min(3).max(10).required(),
	email: Yup.number().positive().integer().required(),
	date: Yup.boolean(),
	pass: Yup.number().positive().integer().required(),
	cpass: Yup.number().positive().integer().required(),
	remember: Yup.string().required(),
	terms: Yup.string().required(),
});

function App() {
	// const [gettedCategories, setGettedCategories] = useState([]);

	// useEffect(() => {
	// 	axios("https://northwind.vercel.app/api/categories").then((res) => {
	// 		setGettedCategories(res.data);
	// 	});
	// }, []);

	const { handleSubmit, handleBlur, handleChange, values, errors, isSubmitting } = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			date: "",
			pass: "",
			cpass: "",
			remember: "",
			terms: "",
		},
		onSubmit: (values, actions) => {
			// console.log("values: ", values);
			actions.resetForm();
		},
		validationSchema: registerSchema,
	});

	return (
		<>
			<section>
				<Container>
					<div></div>
					<Grid container spacing={2} style={{ height: "100dvh" }}>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<div>Capzul</div>
							<div>
								<h2>Create account</h2>
								<p>For business, band or celebrity</p>
							</div>
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}></Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField onBlur={handleBlur} onChange={handleChange} value={values.fname} name="fname" className="item" id="outlined-basic" label="First name" variant="outlined" />
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField onBlur={handleBlur} onChange={handleChange} value={values.lname} name="lname" className="item" id="outlined-basic" label="Last name" variant="outlined" />
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name="email"
								className="item"
								id="outlined-basic"
								label="Email or phone number"
								variant="outlined"
								type="password"
							/>
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.date}
								name="date"
								className="item"
								id="outlined-basic"
								label="Date of birth"
								variant="outlined"
								type="date"
							/>
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField onBlur={handleBlur} onChange={handleChange} value={values.pass} name="pass" className="item" id="outlined-basic" label="Password" variant="outlined" />
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<TextField onBlur={handleBlur} onChange={handleChange} value={values.cpass} name="cpass" className="item" id="outlined-basic" label="Confirm password" variant="outlined" />
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{ display: "flex", flexDirection: "column" }}>
							<span>
								<input name="remember" value={values.remember} onChange={handleChange} id="remember" type="checkbox" />
								<label htmlFor="remember">Remember me</label>
							</span>
							<span>
								<input name="terms" value={values.terms} onChange={handleChange} id="terms" type="checkbox" />
								<label htmlFor="terms">I agree to all Terms and Privacy policy</label>
							</span>
						</Grid>

						<Grid xs={12} sm={12} md={6} lg={6} xl={6}>
							<a href="#">Forgot password?</a>
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", height: "50px"}}>
							<Button disabled={Object.keys(errors).length > 0 || isSubmitting ? true : false} variant="contained" type="submit">
								Create account
							</Button>
						</Grid>
						<Grid xs={12} sm={12} md={6} lg={6} xl={6} style={{display: "flex", justifyContent: "center", height: "50px"}}>
							<Button variant="contained">Sign-in with google</Button>
						</Grid>
						<Grid xs={12}>
							<p>Don’t have an account? Log In</p>
						</Grid>
					</Grid>
				</Container>
			</section>

			{/* <Card className="card">
				<h2>Product Add Form</h2>
				<a href="https://northwind.vercel.app/api/products">API link to check</a>
				<br />
				<br />

				<form className="form" onSubmit={handleSubmit}>
					<InputLabel id="demo-simple-select-label">Categories</InputLabel>
					<Select
						className="sel"
						onBlur={handleBlur}
						value={values.categoryId}
						name="categoryId"
						onChange={handleChange}
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						label="Categories"
					>
						{gettedCategories.map((category, idx) => {
							return (
								<MenuItem key={idx} value={category.id}>
									{category.name}
								</MenuItem>
							);
						})}
					</Select>
					<TextField onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" className="item" id="outlined-basic" label="Name" variant="outlined" />
					<TextField
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.unitPrice}
						name="unitPrice"
						className="item"
						id="outlined-basic"
						label="Unit price"
						variant="outlined"
						type="number"
					/>
					<span>
						<input name="discontinued" value={values.discontinued} onChange={handleChange} id="discontinued" type="checkbox" />
						<label htmlFor="discontinued">is discontinued</label>
					</span>
					<TextField
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.unitsInStock}
						name="unitsInStock"
						className="item"
						id="outlined-basic"
						label="Units in stock"
						variant="outlined"
						type="number"
					/>
					<TextField
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.quantityPerUnit}
						name="quantityPerUnit"
						className="item"
						id="outlined-basic"
						label="Quantity per unit"
						variant="outlined"
					/>
					<Button disabled={Object.keys(errors).length > 0 || isSubmitting ? true : false} variant="contained" type="submit">
						Add product to api
					</Button>
				</form>
			</Card> */}
		</>
	);
}

export default App;
