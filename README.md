# starts-with-uppercase

A function that checks if a given string begins with and uppercase carachter.

## implementation notes
 - direct comparison instead off regex validation to account for characters with diacritics
 - `!== word.toLowerCase()` instead of `=== word.toUpperCase()` to account for strings starting with non letter carachters
 - `.charAt()`instead of bracket notation to ensure compatibility with older browsers
 - preceeding white space is interpreted as the beggining of the string
