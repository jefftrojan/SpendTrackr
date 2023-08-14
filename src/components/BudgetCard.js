import { Card, ProgressBar } from "react-bootstrap";
import { currencyFormatter } from "../utils";
import { getProgressBarVariant } from "../utils";

export default function BudgetCard({name, amount, max}) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className="d-flex justify-content-between 
            align-items-baseline fw-normal mb-3
            ">
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
        </Card.Body>
    </Card>
  )
}
