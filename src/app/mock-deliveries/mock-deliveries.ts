import { Delivery } from '../models/delivery.model';
import { Contact } from '../models/contact.model';

const date = new Date;

export const contacto_administrativo_1 : Contact = {   
    nombre: 'Antonela',
    apellido: 'Rodriguez',
    telefono: '4567890',
    email: 'anto.rodriguez@gmail.com',
};

export const contacto_administrativo_2: Contact = {
    nombre: 'Felipe',
    apellido: 'Martinez',
    telefono: '4567890',
    email: 'felipe.martinez@gmail.com',
};

export const contacto_comercial_1 : Contact = {
    nombre: 'Mariano',
    apellido: 'Gonzalez',
    telefono: '4567890',
    email: 'marian.gonzalez@gmail.com',
};

export const contacto_comercial_2 : Contact = {
    nombre: 'Jimena',
    apellido: 'Tesla',
    telefono: '4567890',
    email: 'jime.tesla@gmail.com',
};

export const deliveries: Delivery[] = [
    {   id: 1,
        nombre: 'Pollenza',
        descripcion: 'Pizzas en todo su estilo',
        especialidades: 'Pizza y empanadas',
        direccion: 'La Plata',
        horario_desde: '10:00',
        horario_hasta: '22:00',
        telefono: '2214678904',
        contacto_administrativo: contacto_administrativo_1,
        contacto_comercial: contacto_comercial_1
    },
]
