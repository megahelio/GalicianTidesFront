import { TideDetail } from "./tide-details";

export interface Tide {
    date: Date;
    tides: TideDetail[];
}