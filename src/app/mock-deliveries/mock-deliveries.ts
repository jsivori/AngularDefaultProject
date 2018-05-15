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
    nombre: 'Antonela',
    apellido: 'Rodriguez',
    telefono: '4567890',
    email: 'anto.rodriguez@gmail.com',
};

export const contacto_comercial_1 : Contact = {
    nombre: 'Antonela',
    apellido: 'Rodriguez',
    telefono: '4567890',
    email: 'anto.rodriguez@gmail.com',
};

export const contacto_comercial_2 : Contact = {
    nombre: 'Antonela',
    apellido: 'Rodriguez',
    telefono: '4567890',
    email: 'anto.rodriguez@gmail.com',
};

export const deliveries: Delivery[] = [
    {   id: 1,
        nombre: 'El noble',
        descripcion: '¿Vos de qué querés?',
        especialidades: 'Pizza y empanadas',
        direccion: 'La Plata',
        horario_desde: '10:00',
        horario_hasta: '23:00',
        telefono: '2214230123',
        contacto_administrativo: contacto_administrativo_1,
        contacto_comercial: contacto_comercial_1
    },
]
