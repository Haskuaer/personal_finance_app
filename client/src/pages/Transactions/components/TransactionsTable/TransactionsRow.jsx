import styles from './TransactionsTable.module.css'

export default function TransactionsRow() {
    return(
        <tr>
            <td id="date">11.11</td>
            <td id="subject">Adam</td>
            <td id="amount">24</td>
            <td id="category">Shopping</td>
            <td id="subcategory">Mix</td>
            <td id="description">Someting something</td>
            <td id="share">Yes</td>
            <td id="sharePercent">50%</td>
            <td id="debt">Yes</td>
            <td id="save">No</td>
        </tr>
    )
}