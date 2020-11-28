import React from 'react';
import ICount from "./ICount";

interface ITotal {
    TotalPages: number;
    TotalValue: number;
}

export interface IGetCounts{
    counts: ICount[];
    total: ITotal;
    page: number;
    length: number;
}