import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

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
