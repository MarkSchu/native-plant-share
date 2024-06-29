function FindEl() {
    return (
        <div>
            <h2>Find Plants</h2>
            <input /> 
        </div>
    );
}

function ShareEl() {
    return (
        <div>
            <h2>Share Plants</h2>
            <input /> 
        </div>
    );
}

export default function FindOrShare() {
    return (
        <div className="find-or-share">
            <FindEl />
            <ShareEl />
        </div>
    )
}