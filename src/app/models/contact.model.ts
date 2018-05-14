/*
Nombre: Requerido – 200 chars máximo 
Apellido: Requerido – 200 chars máximo 
Teléfono: Requerido – 100 chars máximo 
E - mail: Requerido – 100 chars máximo
*/

class Contact{
  private nombre : string;
  private apellido : string;
  private telefono : string;
  private email : string;

  construct(nombre : string, apellido : string, telefono : string, email : string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
  }

  getNombre(){
    return this.nombre;
  }

  getApellido() {
    return this.apellido;
  }

  getTelefono() {
    return this.telefono;
  }

  getEmail() {
    return this.email;
  }

  setNombre(nombre : string){
    this.nombre = nombre;
  }

  setApeliido(apellido: string) {
    this.apellido = apellido;
  }

  setTelefono(telefono: string) {
    this.telefono = telefono;
  }

  setEmail(email: string) {
    this.email = email;
  }

}

