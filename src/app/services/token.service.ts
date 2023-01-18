import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  TOKEN_COLLECTION_NAME = environment.tokenCollectionName;

  constructor(private firestore: AngularFirestore) { }

  saveToken(tokenModel: Token) {
    return this.firestore.collection(this.TOKEN_COLLECTION_NAME).add(tokenModel);
  }
  updateToken(tokenModel: Token) {
    // delete tokenModel.id; TODO
    this.firestore.doc(this.TOKEN_COLLECTION_NAME + '/' + tokenModel.id).update(tokenModel);
  }
}
