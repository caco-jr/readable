import * as moment from "moment";

export function getTime(timestamp) {
    return moment(timestamp).fromNow();
}