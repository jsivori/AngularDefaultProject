/*
Nombre: Requerido – 50 chars máximo
Descripción: Requerido – 1000 chars máximo
Especialidades: 500 chars máximo
Dirección: Requerido – 200 chars máximo
Horario de atención: Requerido
Teléfono: Requerido – 50 chars máximo
Contacto Administrativo(Requerido)
Contacto Comercial(Requerido sí “Idem contacto administrativo” esta seteado a true)
*/

class Delivery{
  private nombre : string;
  private descripcion : string;
  private especialidades : string;
  private direccion : string;
  private horario_atencion : string;
  private telefono : string;
  private contacto_administrativo : Contact;
  private contacto_comercial : Contact;

  construct(nombre : string, descripcion : string, especialidades : string, direccion : string, horario_atencion : string, telefono : string, contacto_administrativo : Contact, contacto_comercial : Contact){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.especialidades = especialidades;
    this.direccion = direccion;
    this.horario_atencion = horario_atencion;
    this.telefono = telefono;
    this.contacto_administrativo = contacto_administrativo;
    this.contacto_comercial = contacto_comercial;
  }

	getNombre(){
		return this.nombre;
	}

	setNombre(nombre : string)	{
		this.nombre = nombre;
  }
  
  getDescripcion() {
    return this.descripcion;
  }

  setDescripcion(descripcion: string) {
    this.descripcion = descripcion;
  }

  getEspecialidades() {
    return this.especialidades;
  }

  setEspecialidades(especialidades: string) {
    this.especialidades = especialidades;
  }

  getDireccion() {
    return this.direccion;
  }

  setDireccion(direccion: string) {
    this.direccion = direccion;
  }

  getHorarioAtencion() {
    return this.horario_atencion;
  }

  setHorarioAtencion(horario_atencion: string) {
    this.horario_atencion = horario_atencion;
  }

  getTelefono() {
    return this.telefono;
  }

  setTelefono(telefono: string) {
    this.telefono = telefono;
  }

  getContactoAdministrativo() {
    return this.contacto_administrativo;
  }

  setContactoAdministrativo(contacto_administrativo: Contact) {
    this.contacto_administrativo = contacto_administrativo;
  }

  getContactoComercial() {
    return this.contacto_comercial;
  }

  setContactoComercial(contacto_comercial: Contact) {
    this.contacto_comercial = contacto_comercial;
  }

}

