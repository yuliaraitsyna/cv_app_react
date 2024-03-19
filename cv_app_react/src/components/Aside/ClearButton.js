export default function ClearButton() {

    function handleClearAction() {
        window.location.reload()
    }
    return (
        <div className="clear-btn">
            <button onClick={handleClearAction}>Clear all</button>
        </div>
    )
}