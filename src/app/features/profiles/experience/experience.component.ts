import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from 'src/app/shared/models/profile';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  profile: Profile;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.showProfile();
  }

  showProfile(){
    this.profileService.getProfile()
      .subscribe((data: Profile) => this.profile = {
        id: data['id'],
        nombre: data['nombre'],
        apellido: data['apellido'],
        imagen: data['imagen'],
        gitProfile: data['git_profile'],
        ocupacion: data['ocupacion'],
        email: data['email'],
        telefono: data['telefono'],
        celular: data['celular'],
        direccion: data['direccion'],
        fechaNacimiento: data['fechaNacimiento'],
        estudios: data['estudios'],
        habilidadesTecnicas: data['habilidades_tecnicas'],
        habilidadesBlandas: data['habilidades_blandas'],
        experiencia: data['experiencia'],
        actividadesExtracurrilares: data['actividades_extracurrilares']
      }
    );
  }



}
