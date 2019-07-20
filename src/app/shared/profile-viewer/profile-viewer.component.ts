import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/features/profiles/profile.service';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.css']
})
export class ProfileViewerComponent implements OnInit {

  profile: Profile;

  constructor(private profileService: ProfileService) {
  }

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
