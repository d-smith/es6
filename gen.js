function* range(start, stop) {
  for (var i = start; i < stop; i++)
    yield i;
}

for(var value of range(1,4)) {
    console.log(value);
}