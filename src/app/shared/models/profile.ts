import { Experience } from './experience';
import { Activities } from './activities';
import { Estudies } from './estudies';

export interface Profile {
    id: string
    nombre: string;
    apellido: string;
    imagen: string;
    gitProfile: string;
    ocupacion: string;
    email: string;
    telefono: string;
    celular: string;
    direccion: string;
    fechaNacimiento: string;
    estudios: Estudies[];
    habilidadesTecnicas: string[];
    habilidadesBlandas: string[];
    experiencia: Experience[];
    actividadesExtracurrilares: Activities[];
}
