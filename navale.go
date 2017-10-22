package main

import (
	"fmt"
	"log"
	"net/http"
)

func handleWebsocket(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
}
func main() {
	fmt.Printf("Hello, Navale world.\n")

	http.Handle("/", http.FileServer(http.Dir("./dist")))
	http.HandleFunc("/ws", handleWebsocket)
	log.Println(http.ListenAndServe(":8000", nil))
}
