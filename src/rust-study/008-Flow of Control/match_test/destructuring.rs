mod arrays_slices;
mod enums;
mod pointers_ref;
mod structs;
mod tuples;

pub fn main() {
    println!("------{} BEGIN------", file!());

    tuples::main();
    arrays_slices::main();
    enums::main();
    pointers_ref::main();
    structs::main();
    println!("------{} END------", file!());
}
