import { hours } from "../data"

export default function ReportTable(props) {
    
    if (props.questions.length == 0) {
        return <h2>No Cookie Stands Available</h2>
    } else { 
        return (
            <table>
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>{hours}</th>
                        <th>Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {props.locations.map(item => (
                        <tr key={item.location}>
                            <td>{item.hourly_data}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        
        )
    }
}