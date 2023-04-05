mod mutability;
mod scope_shadowing;
mod declare_first;
mod freezing;

fn main() {
  println!("------{} BEGIN------", file!());

  let an_integer = 1u32;
  let a_boolean = true;
  let unit = ();

  // copy `an_integer` into `copied_integer`
  let copied_integer = an_integer;

  println!("An integer: {:?}", copied_integer);
  println!("A boolean: {:?}", a_boolean);
  println!("Meet the unit value: {:?}", unit);

  // The compiler warns about unused variable bindings; these warnings can
  // be silenced by prefixing the variable name with an underscore
  let _unused_variable = 3u32;

  let noisy_unused_variable = 2u32;
  // FIXME ^ Prefix with an underscore to suppress the warning
  // Please note that warnings may not be shown in a browser
  println!("------{} END------", file!());

  mutability::main();
  scope_shadowing::main();
  declare_first::main();
  freezing::main();
}