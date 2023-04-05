mod casting;
mod literals;
mod inference;
mod aliasing;

fn main() {
  casting::main();
  literals::main();
  inference::main();
  aliasing::main();
}