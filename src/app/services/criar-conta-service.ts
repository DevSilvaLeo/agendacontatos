import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { CriarContaRequest } from "../models/criar-conta.request.model";
import { CriarContaResponse } from "../models/criar-conta.response.model";

@Injectable({
    providedIn: 'root'
})

export class CriarContaService {
    
    constructor(private httpClient: HttpClient) {}

    post(request: CriarContaRequest): Observable<CriarContaResponse> {
        return this.httpClient.post<CriarContaResponse>(environment.apiContatos + '/criar-conta', request);
    }
}