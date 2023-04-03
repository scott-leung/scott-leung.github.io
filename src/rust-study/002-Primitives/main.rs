fn main() {
    // Variables can be type annotated.
    let logical: bool = true;

    let a_float: f64 = 1.0; // Regular annotation
    let an_integer = 5i32; // Suffix annotation

    // 打印 a_float 的大小
    println!("a_float size is {}", std::mem::size_of_val(&a_float));
    // 打印 an_integer 的大小
    println!("an_integer size is {}", std::mem::size_of_val(&an_integer));

    // Or a default will be used.
    let default_float = 3.0; // `f64`
    let default_integer = 7; // `i32`

    // A type can also be inferred from context.
    let mut inferred_type = 12; // Type i64 is inferred from another line.
    inferred_type = 4294967296i64;

    // 打印 inferred_type 的大小
    println!(
        "inferred_type size is {}",
        std::mem::size_of_val(&inferred_type)
    );

    // A mutable variable's value can be changed.
    let mut mutable = 12; // Mutable `i32`
    mutable = 21;

    // 打印 mutable 的值
    println!("mutable is {}", mutable);

    // Error! The type of a variable can't be changed.
    /*
      error[E0308]: mismatched types
      --> ./main.rs:32:13
       |
    25 |   let mut mutable = 12; // Mutable `i32`
       |                     -- expected due to this value
    ...
    32 |   mutable = true;
       |             ^^^^ expected integer, found `bool`

    error: aborting due to previous error

    For more information about this error, try `rustc --explain E0308`.
       */
    // mutable = true;

    // Variables can be overwritten with shadowing.
    let mutable = true;
    // 打印 mutable 的值
    println!("mutable is {}", mutable);
}
