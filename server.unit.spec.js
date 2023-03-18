const { toDateObject } = require("./server");

const validDateYYYYMMDD = "2015-12-25";
const validDateUnixTimeInMS = 1451001600000;
const UNIX_TIME_MAX = Number("8,640,000,000,000,000".replace(/,/g, ""));
const UNIX_TIME_MIN = UNIX_TIME_MAX * -1;

describe("toDateObject", () => {
  it("exists", () => {
    expect(toDateObject).toBeDefined();
  });
  it("returns an object with a `unix` key that is a Unix timestamp of the input date in milliseconds as type Number if called with a valid date string", () => {
    const res = toDateObject(validDateYYYYMMDD);
    expect(res.hasOwnProperty("unix")).toStrictEqual(true);
    expect(typeof res.unix).toStrictEqual("number");
    expect(UNIX_TIME_MIN < Number(res.unix)).toBeTruthy();
    expect(Number(res.unix) < UNIX_TIME_MAX).toBeTruthy();
  });
  it("returns an object with a `utc` key that is string of the input date in the format of `DayOfWeek, DD MonthAbbreviation YYYY HH:MM:SS GMT` type string if called with a valid date string", () => {
    const res = toDateObject(validDateUnixTimeInMS);
    expect(res.hasOwnProperty("utc")).toStrictEqual(true);
    expect(typeof res.utc).toStrictEqual("string");
    expect(res.utc).toStrictEqual("Fri, 25 Dec 2015 00:00:00 GMT");
  });
  it("returns the correct object if called with the valid date input 1451001600000", () => {
    const res = toDateObject(validDateUnixTimeInMS);
    const exp = { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" };
    expect(res).toStrictEqual(exp);
  });
  it("returns the correct object if called with an invalid date input", () => {
    const res = toDateObject("2020-30-30");
    const exp = { error: "Invalid Date" };
    expect(res).toStrictEqual(exp);
  });
  it("returns the current time in an object if called with an empty date input", () => {
    const nowUnixTime = new Date();
    const res = toDateObject();
    expect(Number(res.unix) >= nowUnixTime.getTime()).toBeTruthy();
    expect(res.utc >= nowUnixTime.toUTCString()).toBeTruthy();
  });
});
