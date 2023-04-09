pub fn main() {
    println!("------{} BEGIN------", file!());

    let mut counter = 0;

    let result = loop {
        counter += 1;

        if counter == 10 {
            break counter * 2;
        }
    };

    println!("The result is {}", result);
    assert_eq!(result, 20);
    println!("------{} END------", file!());
}
