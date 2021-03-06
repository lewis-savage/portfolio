import localeDb from "../locale/locale.json";
export interface localeSignature {
    [key: string]: { [key: string]: string[] };
}
const localDbProper = <localeSignature>localeDb;

export function getLocaleDb() {
    return localDbProper;
}
