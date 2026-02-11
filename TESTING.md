
 1 -Bookmarks are displayed in reverse chronological order (newest first).
   -How I tested this: I wrote a unit test in logic.test.js that provides an array of objects with unordered timestamps.
   -The test asserts that the sortBookMarks function returns them in descending order based on the timestamp property.

 2 -I also wrote a unit test in logic.test.js specifically for empty data.
   -I passed null into the function and asserted that the result was an empty array