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
import { Contact } from './contact.model';

export class Delivery {

  constructor(
    public id : number,
    public nombre : string, 
    public descripcion : string, 
    public especialidades : string, 
    public direccion : string, 
    public horario_desde : string, 
    public horario_hasta : string, 
    public telefono : string, 
    public contacto_administrativo : Contact, 
    public contacto_comercial : Contact 
  ) { }

}

