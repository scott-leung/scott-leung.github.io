mod if_else;
mod loop_test;
mod while_test;
mod for_range;
mod match_test;
mod if_let;
mod let_else;
mod while_let;

fn main() {
  if_else::main();
  loop_test::main();
  while_test::main();
  for_range::main();
  match_test::main();
  if_let::main();
  let_else::main();
  while_let::main();
}