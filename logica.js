let id = 0
let arrayBook = []

function book(name, author, id){ //creamos el constructor del libro
    this.name = name
    this.author = author
    this.id = id
}

function agregar() {
    console.log("Ejecutando capturar")

    //capturando variables
    let nameBook = document.getElementById("name").value
    let authorBook = document.getElementById("author").value

    if(nameBook.trim() != ""){
        if(authorBook.trim() != ""){
        
            id++
            const newBook = new book(nameBook, authorBook, id) //creando el objeto libro      
            
            listarTabla(newBook)
         } else {alert("Ingresar autor")}
  
    }else {alert("Ingresar libro")}
}

    
function listarTabla(book){
    console.log("Ejecutando listarTabla")

    arrayBook.push(book) //push añade objetos de tipo libro al array arrayBook
    document.getElementById("tableBody").innerHTML +=
    `<tr id="book-${book.id}">
    <td>${book.id}</td>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td><button id="quitar" class="btn btn-danger" type="button" onclick="quitar(${book.id});">X</button></td>
    <td><button id="editar" class="btn btn-warning" type="button" onclick="editar();">E</button></td>
    </tr>`; //el += es para agregar cada objeto sin eliminar el anterior 

}

function quitar(id){
    console.log("Eliminando")
    document.getElementById(`book-${id}`).remove()
}

function editar(){
    console.log("Editando: Aún no está hecho")
    //por armar
}