import './recordtile.css';

export default function RecordTile() {
    return (
        <>
            <div className="recordTile">

                <div className="recordTileTextInformation">

                <h4 className='font-semibold text-base'>Record ID: 3483431298074329847347</h4>
                <h4 className='text-sm text-gray-500 mt-1'>26th December, 2023 17:29:39</h4>

                </div>

                <div className="recordTileBtns ml-52">
                        <button className='recordTileViewBtn'>View</button>
                        <button className='recordTileUploadBtn'>Upload to Marketplace</button>
                    </div>

            </div>
        </>
    );
}