export interface Data {
    title:      string;
    timeframes: Timeframes;
}

export interface Timeframes {
    daily:   Daily;
    weekly:  Daily;
    monthly: Daily;
}

export interface Daily {
    current:  number;
    previous: number;
}
