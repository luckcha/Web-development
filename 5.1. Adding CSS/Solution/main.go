package main

import "fmt"

func Addnumber(a int, b int) int {
	sum := a + b
	return sum
}

func main() {
	Lucky := Addnumber(89, 52)
	fmt.Print(Lucky)
}
