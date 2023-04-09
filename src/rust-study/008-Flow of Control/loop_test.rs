mod nesting_labels;
mod returning_from_loops;

pub fn main() {
    println!("------{} BEGIN------", file!());

    let mut count = 0u32;

    println!("Let's count until infinity!");

    // Infinite loop
    loop {
        count += 1;

        if count == 3 {
            println!("three");

            // Skip the rest of this iteration
            continue;
        }

        println!("{}", count);

        if count == 5 {
            println!("OK, that's enough");

            // Exit this loop
            break;
        }
    }

    nesting_labels::main();
    returning_from_loops::main();
    println!("------{} END------", file!());
}
