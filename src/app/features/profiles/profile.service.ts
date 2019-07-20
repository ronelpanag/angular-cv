import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from 'src/app/shared/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  
  profileUrl = "/assets/ejemplo.json";

  getProfile(){
    return this.http.get<Profile>(this.profileUrl);
  }
}
