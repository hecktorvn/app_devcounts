export const currencyFormat = (num:Number, options={precision: 2, prefix: ''}): string => {
    const numValue:any = num | 0;
    let value = numValue.toFixed( options.precision ).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return `${options.prefix} ${value}`.trim();
};