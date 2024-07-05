/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = 12:01:00PM
Return '12:01:00'.

s = 12:01:00AM
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).
*/

function TimeConversion(s: string): string {
  const time = s.slice(0, 8);
  const hour = time.slice(0, 2);
  const mins = time.slice(2, s.length - 1);
  if (s.includes("PM") && +hour < 12) {
    return `${+hour + 12}${mins}`;
  } else if (s.includes("AM") && +hour === 12) {
    return `00${mins}`;
  }
  return `${time}`;
}

TimeConversion("07:05:45PM"); // 19:05:45
TimeConversion("07:05:45AM"); // 07:05:45
TimeConversion("12:01:00PM"); // 12:01:00
TimeConversion("12:01:00AM"); // 00:01:00
