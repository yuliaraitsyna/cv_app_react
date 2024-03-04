export default function PersonalForm() {
    return (
        <form class="personal-section">
            Personal Info
            <input type="text" placeholder="Name" required></input>
            <input type="text" placeholder="Surname" required></input>
            <input type="text" placeholder="Patronymic"></input>
            <input type="email" placeholder="Email" required></input>
            <input type="text" placeholder="Phone number" required></input>
            <input type="text" placeholder="Location" required></input>
            <button type="submit">Done</button>
        </form>
    )
}