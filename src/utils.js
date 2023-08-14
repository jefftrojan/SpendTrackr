export const currencyFormatter = new Intl.NumberFormat(undefined,  {
    style: 'currency',
    minimumFractionDigits: 0,
    currency: 'RWF',
})
export const getProgressBarVariant = (amount, max) => {
    const ratio = amount / max
    if (ratio < .5) return 'primary'
    if (ratio < .75) return 'warning'
    return 'danger'
}