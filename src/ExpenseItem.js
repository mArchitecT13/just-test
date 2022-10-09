function ExpenseItem(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            ExpenseItem
         {props.children}
        </div>
    )
}

export default ExpenseItem