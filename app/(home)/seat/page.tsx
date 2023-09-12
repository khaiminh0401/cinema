const Seat = () => {
    return (
        <>
            <div className="row">
                <div className="information-film col-6">
                    <h1>Chỗ ngồi</h1>
                    <h6>Bộ phim: Hạ cánh nơi anh</h6>
                    <h6>Xuất chiếu: 16:10</h6>
                </div>
                <div className="information-ticket col-6">
                    Thông tin vé
                </div>
            </div>
            <div className="seat-button">
                <button className="btn btn-primary"></button>
            </div>
        </>
    );
}
export default Seat;