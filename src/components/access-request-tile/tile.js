import './tile.css';

export default function Tile() {
    return (
        <>
            <div className='accessRequestTile'>
                <h3 className='font-bold text-2xl' style={{fontFamily: "monospace"}}>Name:</h3>
                <hr/>
                <h5 style={{fontFamily: "Poppins"}}>Bio: of the accesser Lorem coet quis labore commodo fugiat aliquip irure laborum fugiat nisi cillum sint qui velit.</h5>
                <hr/>
                <h4 style={{fontFamily: "Poppins"}}>Reason: Ex officia magna irure aute sunt anim consequat ex deserunt sit.</h4>
                <hr/>
                <h4 style={{fontFamily: "Poppins"}} className='font-bold text-base'>Record Id: d304781243</h4>
                <hr/>
                <h4 style={{fontFamily: "Poppins"}}>Date and Time: 26th December, 2023 14:06:07</h4>
                <hr/>
        
                <div className='accessRequestTileButtons mt-2 mb-2'>
                        <button className='viewRecordTileBtn'>View</button>
                        <button className='acceptRecordTileBtn'>Accept</button>
                        <button className='declineRecordTileBtn'>Decline</button>
                    </div>      


            </div>
        </>
    );
}