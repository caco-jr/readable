import * as moment from "moment";

export const getTime = (timestamp) => moment(timestamp).fromNow();

export const truncateString = (string, limit) => (
    string.length > limit ? `${string.substring(0, limit)}...` : string
)