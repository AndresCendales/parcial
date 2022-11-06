import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Cafe} from "./cafe";

@Injectable({
  providedIn: 'root'
})
export class CafeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // @ts-ignore
  getCafes():Observable<Cafe[]>{
    return this.http.get<Cafe[]>(this.apiUrl)
  }
}
