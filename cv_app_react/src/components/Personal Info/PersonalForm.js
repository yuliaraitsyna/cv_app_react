export default function PersonalForm() {
    return (
        <div class="personal-form">
            Personal Info
            <input type="text" placeholder="Name" required></input>
            <input type="text" placeholder="Surname" required></input>
            <input type="text" placeholder="Patronymic"></input>
            <input type="email" placeholder="Email" required></input>
            <input type="text" placeholder="Phone number" required></input>
            <input type="text" placeholder="Location" required></input>
        </div>
    )
}