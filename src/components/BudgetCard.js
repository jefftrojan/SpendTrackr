import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { getProgressBarVariant } from "../utils";

export default function BudgetCard({name, amount, max, grey}) {
    const classNames = []
    if (amount > max) {
        classNames.push('bg-danger', 'bg-opacity-10')
    } else if (grey) {
        classNames.push('bg-light')
    }
  return (
    <Card className={classNames.join(' ')}>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline fw-normal mb-3">
                <div className="me-2">{name}</div>
                <div className="d-flex align-items-baseline">{currencyFormatter.format(amount)} <span className="text-muted fs-6 ms-1">/ {currencyFormatter.format(max)} </span> </div>
            </Card.Title>

            <ProgressBar 
            className="rounded-pill" 
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
            />
            <Stack direction="horizontal" gap={4} className="mt-5">
                <Button variant="success" className="ms-auto">
                    Add Expense
                </Button>

                <Button variant="primary">
                    View Expenses
                </Button>

                <Button variant="danger">
                    Delete Expense

                </Button>

            </Stack>
        </Card.Body>
    </Card>
  )
}
