import { useParams } from "react-router-dom";

export default function Profile() {
    const { buildingUuid, id } = useParams();

    return (
        <div>
            <h1>Profile: {id}</h1>
            <p>This is the profile page for building: {buildingUuid}</p>
        </div>
    )
}