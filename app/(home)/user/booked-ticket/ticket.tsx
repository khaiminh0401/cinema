import "./ticket.css"

const Ticket = () => {
    return (
        <div className="section mb-6">
            <div className="text-center">
                <h2 className="pb-1">Chi tiết <i className='uil uil-bus color-yellow'></i> vé</h2>
                <div className="section">
                    <input className="checkbox-ticket" type="radio" name="ticket" id="ticket-1"/>
                    <label htmlFor="ticket-1">
							<span className="top-dots">
								<span className="section dots">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</span>
                        <span className="duration">
								30 min
							</span>
                        <span className="price mt-2 pb-4 mb-3">
								<sup>$</sup>2.95
							</span>
                        <span className="section dots">
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
								<span></span>
							</span>
                        <span className="section pt-4">
								<i className='uil uil-clock-two mt-3'></i>
							</span>
                        <span className="time mt-2">
								2:00 pm - 2:30 pm
							</span>
                        <span className="bottom-dots">
								<span className="section dots">
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
									<span></span>
								</span>
							</span>
                    </label>
                    <div className="w-100"></div>
                </div>
            </div>
        </div>
    );
}

export default Ticket;