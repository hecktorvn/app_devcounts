export default interface ICount {
    id: string;
    description: string;
    state: Number;
    value: Number;
    maturity: string;
    addition: Number;
    discount: Number;
    paid: Number;
    total: Number;
    portion: string;
    note: string;
    dateadd: Date;
    fixed: Boolean;
    error?: string;
}