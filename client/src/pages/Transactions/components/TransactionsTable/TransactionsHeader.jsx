import styles from './TransactionsTable.module.css'

export default function TransactionsHeader() {
    return(
        <thead>
            <tr>
                <td>Date</td>
                <td>Subject</td>
                <td>Amount</td>
                <td>Category</td>
                <td>Subcategory</td>
                <td>Description</td>
                <td>Share</td>
                <td>Share%</td>
                <td>Debt</td>
                <td>Save</td>
            </tr>
        </thead>
    )
}