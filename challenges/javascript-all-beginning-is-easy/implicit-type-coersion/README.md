# implicit-type-coersion
Exercise from the book JavaScript all beginning is easy

**Section: Type coersion**

**Exercise**
What is the data type  of the following calculations?

| Calculation  |Result|DataType|
|---|---|---|
| "5" * "4" | 20 |number |
| "5" * 4  | 20 |number |
| 5 * "4"  | 20 |number |
| "5" - "4" | 1 |number |
| "5" - 4 | 1 |number |
| 5 - "4" | 1 |number |
| "5" / "4" | 1.25 |number |
| "5" / 4 | 1.25 |number |
| 5 / "4" | 1.25 |number |
| "1.5" * 2 | 3 |number |
| "1,5" * 2 | NaN |NaN |
| "1.5" + 2 | 1.52 | String |
| Number("1.5") * 2 | 3 | number |
| Number("1,5") * 2 | 2.5 | number |
| Number("3 Tage") * 7 | NaN | NaN |
| Number("Seite 20") + 5 | NaN | NaN |
| "9,2" + Number("11.7") | 9,211.7 | number |
| (NaN - 2) * (4 / 2) | NaN | NaN |
| alert(Number(17 / 2 + 1.3)) | "9.8" | string |
| typeof 12.25 | number | number |
| typeof typeof 12.25 | number | string |
