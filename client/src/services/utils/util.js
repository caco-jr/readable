import * as moment from "moment";

export function getTime(timestamp) {
    return moment(timestamp).fromNow();
}

export function truncateString(string, limit) {
    return string.length > limit ? `${string.substring(0, limit)}...` : string;
}