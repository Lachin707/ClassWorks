import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CFormInput, CInputGroup } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

function Card({data}) {
	return (
		<>
		
			<CCard style={{ width: "18rem" }}>
				<CCardImage orientation="top" src={data.avatar_url} />
				<CCardBody>
					<CCardTitle>{data.name}</CCardTitle>
					<CCardText>{data.bio}</CCardText>
					<CButton>Go to github page</CButton>
					<CButton>Add to table</CButton>
				</CCardBody>
			</CCard>
		</>
	);
}

export default Card;
