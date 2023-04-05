// Globals are declared outside all other scopes.
static LANGUAGE: &str = "Rust";
const THRESHOLD: i32 = 10;
static mut TEST: &str = "Test";

fn is_big(n: i32) -> bool {
    // Access constant in some function
    n > THRESHOLD
}

pub fn main() {
    println!("------Constants BEGIN------");

    let n = 16;

    // Access constant in the main thread
    println!("This is {}", LANGUAGE);

    unsafe {
        println!("This is TEST {}", TEST);
        TEST = &"<TEST CHANGE>";
        println!("This is TEST CHANGE {}", TEST);
    }
    println!("The threshold is {}", THRESHOLD);
    println!("{} is {}", n, if is_big(n) { "big" } else { "small" });

    // Error! Cannot modify a `const`.
    // THRESHOLD = 5;
    // FIXME ^ Comment out this line
    println!("------Constants END------");
}