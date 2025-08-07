import { RiCalendar2Line } from "react-icons/ri";
import "./HeaderBtn.css";

export default function HeaderBtn() {
	return (
		<>
			<a href="/" className="btn">
				<RiCalendar2Line />
				<p>Book a Free Consultation</p>
			</a>
		</>
	);
}
